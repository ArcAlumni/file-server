package com.fs.fs.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.socket.WebSocketSession;

@Controller
@RequestMapping("/websocket")
public class WebSocketController {

    public static final List<WebSocketSession> sessions = new ArrayList<>();

    @GetMapping
    public String getWebSocket() {
        return "ws-broadcast";
    }

    @ResponseBody
    @GetMapping("/ws/sessions")
    public List<String> sessions() {
        return sessions.stream().map(s -> s.getId()).collect(Collectors.toList());
    }

}