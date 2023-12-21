package com.jefferson.todolist.dtos;

import java.util.Optional;

import com.jefferson.todolist.enums.EnumStatus;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TodoUpdateDTO {
    private Optional<String> title;
    private Optional<String> description;
    private Optional<EnumStatus> status;
}