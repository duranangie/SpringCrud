package com.main.crud.controller;


import com.main.crud.entity.Student;
import com.main.crud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {


    @Autowired
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAll() {
        return studentService.getStudent();

    }

    @GetMapping("/{studentId}")
    public Optional<Student> getById(@PathVariable("studentId") Long studentId) {
        return studentService.getStudents(studentId);

    }


    @PostMapping
    public void saveOrUpdate(@RequestBody Student student) {
        studentService.saveOrUpdate(student);

    }

    @PutMapping
    public void Update(@RequestBody Student student){
        studentService.Update(student);
    }

    @DeleteMapping("/{studentId}")
    public void deletes( @PathVariable("studentId") Long studentId) {
        studentService.delete(studentId);
    }

}
