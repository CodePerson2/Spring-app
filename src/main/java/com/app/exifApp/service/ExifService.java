package com.app.exifApp.service;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface ExifService {

    Map<String, String> getExifDataFromMultipartFile(MultipartFile file);
    
}
