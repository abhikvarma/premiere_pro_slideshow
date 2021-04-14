# Premiere Pro Automated Slide Insertions
Creates a new sequence and adds pictures into it according to the timestamps provided.

# Requirements
- Adobe Extenscript
  - https://www.adobe.com/devnet/scripting.html
  
# How to use
- Open ```slide_insertion.jsx``` on Extemdscirpt
- Open your premiere pro project and add the images (named in order of insertion) to the project bin
- Select your premiere pro version from the top-left dropdown
- Change the timestamps in ```slide_insertion.jsx``` to your requirements
  - If you have 6 images, you will have 7 numbers in the array
  - The first 6 will be the starting points for the six images and last timestamp is the end point for the last image
- Run the code and enter the sequence settings you want

# Note
- It only considers .jpg, .jpeg and .png files from your project bin and adds them in alphanumeric order
- The error on line 32 is ignored as the error is thrown wrongly. This can't be changed until Adobe fixes the toolkit form their end.
