#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;
use std::net::UdpSocket;
use tauri::event::listen;

fn main() {
  tauri::AppBuilder::new()
    .invoke_handler(|webview, arg| {
      listen(String::from("mouse-event"), |msg| {
        let socket = UdpSocket::bind("192.168.43.147:41439")
          .expect("couldn't bind to address");
        socket.send_to(&[0; 10], "192.168.43.147:41439")
          .expect("couldn't send data");
      });

      use cmd::Cmd::*;
      match serde_json::from_str(arg) {
        Err(e) => {
          Err(e.to_string())
        }
        Ok(command) => {
          match command {
            // definitions for your custom commands from Cmd here
            MyCustomCommand { argument } => {
              //  your command code
              println!("{}", argument);
            }
          }
          Ok(())
        }
      }
    })
    .build()
    .run();
}
