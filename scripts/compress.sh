#!/bin/bash

basedir=$(pwd)/assets

for file in $basedir/raw/*;
do
  filename=$(echo "$file" | sed 's/raw/optimized/g')
  echo $filename
  convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% $file $filename
done
