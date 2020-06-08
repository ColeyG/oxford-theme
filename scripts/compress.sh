#!/bin/bash

#
# This script requires the ImageMagick photo transformer.
#

basedir=$(pwd)/assets

for file in $basedir/raw/*;
do
  filename=$(echo "$file" | sed 's/raw/optimized/g')
  echo $filename
  convert -strip -interlace Plane -gaussian-blur 0.5 -quality 70% $file $filename
done
