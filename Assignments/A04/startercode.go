package main

import (
	"fmt"
	"time"
)

// Sequential version of the image downloader.
func downloadImagesSequential(urls []string) {
	// TODO: Implement sequential download logic
}

// Concurrent version of the image downloader.
func downloadImagesConcurrent(urls []string) {
	// TODO: Implement concurrent download logic
}

func main() {
	urls := []string{
		"https://unsplash.com/photos/a-view-of-the-top-of-a-mountain-in-the-clouds-wdQ7DUGJmk8",
		"https://unsplash.com/photos/a-man-in-a-kimono-walking-down-a-dark-alley-mHS1sTT2ybQ",
		"https://unsplash.com/photos/a-very-tall-building-with-lots-of-windows-d1h2rPLWfBg ",
		"https://unsplash.com/photos/a-leaf-is-laying-on-the-ground-in-the-middle-of-the-road-DIi8kbZZmKQ",
		"https://unsplash.com/photos/a-cup-of-hot-chocolate-with-marshmallows-in-it-s0Cnecr8W4U",
		// Add more image URLs
	}

	// Sequential download
	start := time.Now()
	downloadImagesSequential(urls)
	fmt.Printf("Sequential download took: %v\n", time.Since(start))

	// Concurrent download
	start = time.Now()
	downloadImagesConcurrent(urls)
	fmt.Printf("Concurrent download took: %v\n", time.Since(start))
}

// Helper function to download and save a single image.
func downloadImage(url, filename string) error {
	// TODO: Implement download logic
	return nil
}
