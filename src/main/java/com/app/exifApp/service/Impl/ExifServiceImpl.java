package com.app.exifApp.service.Impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.app.exifApp.service.ExifService;
import com.drew.imaging.ImageMetadataReader;
import com.drew.metadata.Directory;
import com.drew.metadata.Metadata;
import com.drew.metadata.Tag;

public class ExifServiceImpl implements ExifService {

    @Override
    public Map<String, String> getExifDataFromMultipartFile(MultipartFile file) {
        Map<String, String> exifData = new HashMap<>();

        try {
            Metadata metadata = ImageMetadataReader.readMetadata(file.getInputStream());

            for (Directory directory : metadata.getDirectories()) {
                for (Tag tag : directory.getTags()) {
                    exifData.put(tag.getTagName(), tag.getDescription());
                }

                if (directory.hasErrors()) {
                    for (String error : directory.getErrors()) {
                        System.err.println("ERROR: " + error);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return exifData;
    }
    
}
