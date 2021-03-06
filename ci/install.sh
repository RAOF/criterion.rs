set -ex

cargo install clippy --force
if [ "$TRAVIS_OS_NAME" = "linux" ]; then
    cargo install mdbook --force
fi

if [ "$TRAVIS_OS_NAME" = "osx" ] && [ "$GNUPLOT" = "yes" ]; then
    brew update
    brew install gnuplot
fi
