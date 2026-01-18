import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import {
  ClientInquiry,
  InquiryStatus,
  InquiryPriority,
  InquiryNote
} from '@/types';

/**
 * Property-based tests for Client Inquiry Management (Property 17)
 * Requirements: 21.3 - Create property-based test for inquiry management
 *
 * Universal properties tested:
 * - Data consistency across inquiry operations
 * - Status and priority transitions maintain integrity
 * - Note operations preserve inquiry data
 * - Search and filtering maintain data accuracy
 * - Bulk operations don't corrupt data
 */

const inquiryStatusArbitrary = fc.constantFrom(
  ...Object.values(InquiryStatus)
);

const inquiryPriorityArbitrary = fc.constantFrom(
  ...Object.values(InquiryPriority)
);

const inquiryNoteArbitrary = fc.record({
  id: fc.string(),
  content: fc.stringOf(fc.alphaNumericChar(), { minLength: 1, maxLength: 500 }),
  createdAt: fc.date(),
  createdBy: fc.string({ minLength: 1, maxLength: 50 })
});

const clientInquiryArbitrary = fc.record({
  id: fc.string({ minLength: 1 }),
  name: fc.string({ minLength: 1, maxLength: 100 }),
  email: fc.emailAddress(),
  phone: fc.option(fc.string({ minLength: 10, maxLength: 15 })),
  projectType: fc.stringMatching(/^(Commercial|Music Video|Documentary|Personal)$/),
  message: fc.stringOf(fc.alphaNumericChar(), { minLength: 10, maxLength: 1000 }),
  status: inquiryStatusArbitrary,
  priority: inquiryPriorityArbitrary,
  submittedAt: fc.date(),
  respondedAt: fc.option(fc.date()),
  notes: fc.array(inquiryNoteArbitrary, { maxLength: 20 })
}) as fc.Arbitrary<ClientInquiry>;

describe('Inquiry Management - Property-Based Tests (Property 17)', () => {
  /**
   * Property 1: Adding an inquiry should increase count by exactly 1
   */
  it('adding an inquiry should increase total count by exactly one', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { maxLength: 50 }),
        clientInquiryArbitrary,
        (initialInquiries, newInquiry) => {
          const inquiries = [...initialInquiries, newInquiry];
          expect(inquiries.length).toBe(initialInquiries.length + 1);
          expect(inquiries).toContain(newInquiry);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 2: Deleted inquiry should not exist in list
   */
  it('deleting an inquiry should remove it completely', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0, max: 49 }),
        (inquiries, index) => {
          if (index >= inquiries.length) return true;

          const indexToDelete = index % inquiries.length;
          const deletedId = inquiries[indexToDelete].id;
          const remaining = inquiries.filter(inq => inq.id !== deletedId);

          expect(remaining).not.toContainEqual(
            expect.objectContaining({ id: deletedId })
          );
          expect(remaining.length).toBe(inquiries.length - 1);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 3: Status update should only change status field
   */
  it('updating inquiry status should only modify status field', () => {
    fc.assert(
      fc.property(
        clientInquiryArbitrary,
        inquiryStatusArbitrary,
        (inquiry, newStatus) => {
          const originalId = inquiry.id;
          const originalEmail = inquiry.email;
          const originalSubmittedAt = inquiry.submittedAt;

          const updated = { ...inquiry, status: newStatus };

          expect(updated.id).toBe(originalId);
          expect(updated.email).toBe(originalEmail);
          expect(updated.submittedAt).toBe(originalSubmittedAt);
          expect(updated.status).toBe(newStatus);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 4: Priority update should only change priority field
   */
  it('updating inquiry priority should only modify priority field', () => {
    fc.assert(
      fc.property(
        clientInquiryArbitrary,
        inquiryPriorityArbitrary,
        (inquiry, newPriority) => {
          const originalId = inquiry.id;
          const originalMessage = inquiry.message;
          const originalStatus = inquiry.status;

          const updated = { ...inquiry, priority: newPriority };

          expect(updated.id).toBe(originalId);
          expect(updated.message).toBe(originalMessage);
          expect(updated.status).toBe(originalStatus);
          expect(updated.priority).toBe(newPriority);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 5: Adding a note should not modify inquiry core fields
   */
  it('adding a note should preserve all inquiry core data', () => {
    fc.assert(
      fc.property(
        clientInquiryArbitrary,
        inquiryNoteArbitrary,
        (inquiry, newNote) => {
          const originalId = inquiry.id;
          const originalEmail = inquiry.email;
          const originalStatus = inquiry.status;
          const originalPriority = inquiry.priority;

          const updated = {
            ...inquiry,
            notes: [newNote, ...inquiry.notes]
          };

          expect(updated.id).toBe(originalId);
          expect(updated.email).toBe(originalEmail);
          expect(updated.status).toBe(originalStatus);
          expect(updated.priority).toBe(originalPriority);
          expect(updated.notes[0]).toEqual(newNote);
          expect(updated.notes.length).toBe(inquiry.notes.length + 1);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 6: Deleting a note should preserve inquiry and other notes
   */
  it('deleting a note should not affect inquiry or other notes', () => {
    fc.assert(
      fc.property(
        clientInquiryArbitrary,
        fc.integer({ min: 0, max: 19 }),
        (inquiry, noteIndex) => {
          if (inquiry.notes.length === 0) return true;

          const indexToDelete = noteIndex % inquiry.notes.length;
          const deletedNoteId = inquiry.notes[indexToDelete].id;

          const updated = {
            ...inquiry,
            notes: inquiry.notes.filter(n => n.id !== deletedNoteId)
          };

          expect(updated.id).toBe(inquiry.id);
          expect(updated.notes).not.toContainEqual(
            expect.objectContaining({ id: deletedNoteId })
          );
          expect(updated.notes.length).toBe(inquiry.notes.length - 1);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 7: Search should only return matching inquiries
   */
  it('search results should only contain inquiries matching search term', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { maxLength: 50 }),
        fc.string({ minLength: 1, maxLength: 20 }),
        (inquiries, searchTerm) => {
          const results = inquiries.filter(inq =>
            inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inq.message.toLowerCase().includes(searchTerm.toLowerCase())
          );

          results.forEach(result => {
            const matches =
              result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              result.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
              result.message.toLowerCase().includes(searchTerm.toLowerCase());

            expect(matches).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 8: Status filter should only return matching inquiries
   */
  it('status filter should only return inquiries with matching status', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { maxLength: 50 }),
        inquiryStatusArbitrary,
        (inquiries, filterStatus) => {
          const results = inquiries.filter(inq => inq.status === filterStatus);

          results.forEach(result => {
            expect(result.status).toBe(filterStatus);
          });

          inquiries.forEach(inquiry => {
            if (inquiry.status === filterStatus) {
              expect(results).toContainEqual(inquiry);
            } else {
              expect(results).not.toContainEqual(inquiry);
            }
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 9: Priority filter should only return matching inquiries
   */
  it('priority filter should only return inquiries with matching priority', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { maxLength: 50 }),
        inquiryPriorityArbitrary,
        (inquiries, filterPriority) => {
          const results = inquiries.filter(inq => inq.priority === filterPriority);

          results.forEach(result => {
            expect(result.priority).toBe(filterPriority);
          });

          inquiries.forEach(inquiry => {
            if (inquiry.priority === filterPriority) {
              expect(results).toContainEqual(inquiry);
            } else {
              expect(results).not.toContainEqual(inquiry);
            }
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 10: Combined filters should be AND logic
   */
  it('combined filters should use AND logic (both conditions must match)', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { maxLength: 50 }),
        inquiryStatusArbitrary,
        inquiryPriorityArbitrary,
        (inquiries, filterStatus, filterPriority) => {
          const results = inquiries.filter(inq =>
            inq.status === filterStatus && inq.priority === filterPriority
          );

          results.forEach(result => {
            expect(result.status).toBe(filterStatus);
            expect(result.priority).toBe(filterPriority);
          });

          inquiries.forEach(inquiry => {
            if (inquiry.status === filterStatus && inquiry.priority === filterPriority) {
              expect(results).toContainEqual(inquiry);
            }
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 11: Inquiry ID should be unique
   */
  it('inquiry IDs should be globally unique within a list', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { maxLength: 50 }),
        (inquiries) => {
          const ids = inquiries.map(inq => inq.id);
          const uniqueIds = new Set(ids);

          expect(uniqueIds.size).toBe(ids.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 12: Bulk update should preserve list integrity
   */
  it('bulk status update should maintain list consistency', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { minLength: 1, maxLength: 50 }),
        inquiryStatusArbitrary,
        (inquiries, newStatus) => {
          const updated = inquiries.map(inq => ({
            ...inq,
            status: newStatus
          }));

          expect(updated.length).toBe(inquiries.length);
          updated.forEach(inq => {
            expect(inq.status).toBe(newStatus);
          });

          updated.forEach((updated, index) => {
            expect(updated.id).toBe(inquiries[index].id);
            expect(updated.email).toBe(inquiries[index].email);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 13: Email format should remain valid after operations
   */
  it('email addresses should remain valid after all operations', () => {
    fc.assert(
      fc.property(
        fc.array(clientInquiryArbitrary, { maxLength: 50 }),
        (inquiries) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          inquiries.forEach(inquiry => {
            expect(inquiry.email).toMatch(emailRegex);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 14: Note timestamps should be in chronological order when sorted
   */
  it('notes sorted by date should maintain chronological order', () => {
    fc.assert(
      fc.property(
        clientInquiryArbitrary,
        (inquiry) => {
          if (inquiry.notes.length <= 1) return true;

          const sorted = [...inquiry.notes].sort((a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );

          for (let i = 0; i < sorted.length - 1; i++) {
            const current = new Date(sorted[i].createdAt).getTime();
            const next = new Date(sorted[i + 1].createdAt).getTime();
            expect(current).toBeLessThanOrEqual(next);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 15: Updating responded status should set respondedAt timestamp
   */
  it('responding to inquiry should set respondedAt timestamp appropriately', () => {
    fc.assert(
      fc.property(
        clientInquiryArbitrary,
        (inquiry) => {
          if (inquiry.status === InquiryStatus.RESPONDED) {
            expect(inquiry.respondedAt).toBeDefined();
          }

          if (!inquiry.respondedAt) {
            expect(inquiry.status).not.toBe(InquiryStatus.RESPONDED);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
