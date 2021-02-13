#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;
use std::net::UdpSocket;
use tauri::event::listen;

fn send(socket: &UdpSocket, receiver: &str, msg: &Vec<u8>) -> usize {
  let result: usize = 0;
  match socket.send_to(&msg, receiver) {
    Ok(number_of_bytes) => {},
    Err(fail) => {},
  }

  result
}

fn main() {
  tauri::AppBuilder::new()
    .setup(|webview, arg| {
      listen(String::from("screen-event"), |msg| {
        let socket = UdpSocket::bind("0.0.0.0:41439")
          .expect("couldn't bind to address");

        let msg = msg.unwrap().into_bytes();
        send(&socket, "192.168.43.147:41439", &msg);
      });
    })
    .build()
    .run();
}
