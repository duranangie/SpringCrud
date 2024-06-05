package com.main.crud.service;

import com.main.crud.entity.Student;
import com.main.crud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;


    //traer todos
    public List<Student> getStudent() {
        return studentRepository.findAll();
    }

    //buscade por id
    public Optional<Student> getStudents(long id) {
        return studentRepository.findById(id);
    }

    //guardar o actualizar

    public void saveOrUpdate(Student student) {
        studentRepository.save(student);
    }


    //actualizar
    public void UpdateById(Long id, Student student) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if (optionalStudent.isPresent()) {
            Student student1 = optionalStudent.get();
            student1.setFirstName(student.getFirstName());
            student1.setLastName(student.getLastName());
            student1.setEmail(student.getEmail());
            studentRepository.save(student1);
        }

    }


    //eliminar
    public void delete(Long id) {
        studentRepository.deleteById(id);
    }
}
