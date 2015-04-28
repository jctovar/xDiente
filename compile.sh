#!/bin/bash

ionic build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../colibri.keystore /Users/jctovar/Cordova/xDiente/platforms/android/ant-build/CordovaApp-release-unsigned.apk colibri
rm ../xdiente.apk
zipalign -v 4 /Users/jctovar/Cordova/xDiente/platforms/android/ant-build/CordovaApp-release-unsigned.apk ../xdiente.apk
