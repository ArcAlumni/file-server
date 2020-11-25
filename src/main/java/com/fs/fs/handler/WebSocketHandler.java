package com.fs.fs.handler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import com.fs.fs.controller.WebSocketController;

import org.springframework.web.socket.BinaryMessage;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

public class WebSocketHandler extends AbstractWebSocketHandler{
    
    private final List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        WebSocketController.sessions.add(session);
        sessions.add(session);
        super.afterConnectionEstablished(session);
    }
 

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        WebSocketController.sessions.remove(session);
        sessions.remove(session);
        super.afterConnectionClosed(session, status);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        super.handleTextMessage(session, message);
        
        // for broadcasts
        
        // sessions.forEach(webSocketSession -> {
        //     try {
        //         TextMessage textMessage = new TextMessage("Response for : "+message.getPayload());
        //         webSocketSession.sendMessage(textMessage);
        //     } catch (IOException e) {
        //         e.printStackTrace();
        //     }
        // });
        
        TextMessage textMessage = new TextMessage("Response for : "+message.getPayload());
        session.sendMessage(textMessage);
    }

    @Override
    protected void handleBinaryMessage(WebSocketSession session, BinaryMessage message) throws Exception {
        super.handleBinaryMessage(session, message);
        try{
            session.sendMessage(message);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

}
