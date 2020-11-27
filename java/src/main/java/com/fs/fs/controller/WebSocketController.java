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
@RequestMapping
public class WebSocketController {

    public static final List<WebSocketSession> sessions = new ArrayList<>();

    @GetMapping("/websocket/text")
    public String getWebSocketText() {
        return "ws-broadcast";
    }

    @GetMapping("/websocket/bin")
    public String getWebSocketBin() {
        return "index2";
    }

    @ResponseBody
    @GetMapping("/ws/sessions")
    public List<String> sessions() {
        return sessions.stream().map(s -> s.getId()).collect(Collectors.toList());
    }

}