OUT=../css/style.css
echo "/* Generated from ../less/style.less */" > $OUT
lessc -x --yui-compress style.less >> $OUT