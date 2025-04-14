package com.app.exifApp;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
  public Map<String, String> exifReader(@RequestParam("image") MultipartFile file) {
   return exifService.getExifDataFromMultipartFile(file);
  }
}
