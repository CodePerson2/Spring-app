package com.app.exifApp;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.exifApp.service.ExifService;

@RestController
@RequestMapping("/api")
public class ApiController {

  private final ExifService exifService;

  @Autowired
  public ApiController(ExifService exifService) {
    this.exifService = exifService;
    // Constructor
  }

  @PostMapping("/exif-reader")
  public ResponseEntity<?> exifReader(@RequestParam("image") MultipartFile file) {
      if (!"image/jpeg".equalsIgnoreCase(file.getContentType())) {
          return ResponseEntity.badRequest().body(Map.of("error", "Only JPEGs allowed"));
      }

      try {
          Map<String, String> exifData = exifService.getExifDataFromMultipartFile(file);
          return ResponseEntity.ok(exifData);
      } catch (Exception e) {
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                  .body(Map.of("error", "Failed to process image"));
      }
  }
}
