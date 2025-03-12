# Website-Schombel

A website about the guest house of my parents

## Resizing images

    ## install imagemagick with homebrew
    brew install imagemagick

    ## create sub-directory
    mkdir -p thumbs

    ## execute in loop and resize images with same height but keep the aspect ratio
    ## -resize x113 // same height
    ## -resize 113x // same width
    for file in *.jpg; do
        magick "$file" -resize x113 "thumbs/$file"
    done

## Run server locally

    python3 -m http.server