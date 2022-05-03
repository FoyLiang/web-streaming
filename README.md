# web-streaming
Code สำหรับการสร้างเว็บสตรีมมิ่งเพื่อถ่ายทอดสด โดยการใช้ 
- React ในการทำส่วนของ Front-end
- NodeJS เป็น Server สำหรับการ Streaming

## โปรแกรมที่จำเป็น
- OBS
<img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Open_Broadcaster_Software_Logo.png" width="250" height="250">
- FFMpeg
<img src="https://www.techtalkthai.com/wp-content/uploads/2018/04/ffmpeg_logo_banner.png" width="400" height="200">

## ขั้นตอนการใช้งาน
1. เข้าโฟลเดอร์ node-media-server
2. โหลด [FFMpeg](https://www.ffmpeg.org/download.html) มาลงในโฟลเดอร์ node-media-server
3. เปิด Terminal พิมพ์
```
node server.js
```
3. ออกจากโฟลเดอร์ แล้วเข้าโฟลเดอร์ React
4. เปิด Terminal พิมพ์ 
```
npm start
```
5. เปิดโปรแกรม OBS
6. เลือกการ Stream แบบ custom
7. ในช่อง Server กรอก ```rtmp://[SERVER_NAME]:2222/live```
8. ในช่อง Stream Key กรอกอะไรก็ได้ เพื่อเป็น url เช่น หากเรากรอก test เว็บที่จะใช้ดูก็จะเป็น ```http://[SERVER_NAME]:3000/test```
9. กด Apply แล้วเริ่มการ Stream
