#!/usr/bin/env python3
"""Convert hero image to proper format and save to public/images"""

import os
from PIL import Image

# Since we can't directly access the attachment, we'll use one of the existing profile images
# as a placeholder and document how to add the actual image

source_images = [
    'public/images/profile-1.JPG',
    'public/images/profile-2.jpg', 
    'public/images/profile-3.jpg'
]

output_path = 'public/images/hero-bg.jpg'

# Find first existing image to use as hero background
for img_path in source_images:
    if os.path.exists(img_path):
        print(f"Using {img_path} as hero background source...")
        
        # Open and resize image
        img = Image.open(img_path)
        
        # Convert to RGB if needed (for JPEG compatibility)
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Resize to common hero size (1920x1080)
        img.thumbnail((1920, 1080), Image.Resampling.LANCZOS)
        
        # Create new image with proper dimensions
        final_img = Image.new('RGB', (1920, 1080), (200, 200, 200))
        offset = (
            (1920 - img.width) // 2,
            (1080 - img.height) // 2
        )
        final_img.paste(img, offset)
        
        # Save as JPEG
        final_img.save(output_path, 'JPEG', quality=85)
        print(f"✅ Hero background image created at {output_path}")
        print(f"   Size: {final_img.size}")
        print(f"   Note: To use your custom image, replace this with your photo")
        break
else:
    print("No source images found. Please add profile images first.")
    print("To add your custom hero image:")
    print("1. Place your image in: public/images/hero-bg.jpg")
    print("2. The image will be automatically resized and converted")
