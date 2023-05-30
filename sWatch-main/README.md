Stopwatch

A simple Stopwatch developed using Vanilla JS and styled using CSS, which starts, stops and resets the timer.

The link to the final hosted webpage is : https://ssuyash3000.github.io/sWatch/

Demo Video : https://www.youtube.com/watch?v=ZXueY524AB8

The display timer remains set to '00:00:00' initially i.e. (HH:MM:SS) and changes according to the button clicked.

![image](https://user-images.githubusercontent.com/60548103/224163548-9dc53927-e0e8-4456-85cc-99fefff61c6a.png)



FEATURES & FUNCTIONALITY :

START BUTTON :
Starts the timer as soon as it gets clicked.

![image](https://user-images.githubusercontent.com/60548103/224163702-84947b4e-ae86-4351-a225-3d16c3293a67.png)


The time gets computed, i.e., after the second counter hits 60, it resets to 0 and 
increments the minutes, Similarly when the minute counter hits 60, it resets to 0 and increments the hour.
![image](https://user-images.githubusercontent.com/60548103/224165513-fd8e47d1-151c-4d1c-8e92-b64dd8bf3786.png)

STOP BUTTON :
Pauses the time interval and sets the inner text of the START button as RESUME.
And also the time at which the stop button was hit, is displayed in the lap list

On clicking RESUME the time begins again from the point of time where it was paused initially.
![image](https://user-images.githubusercontent.com/60548103/224165605-b53d368a-6fe6-4f4c-b932-135d1c2d7f29.png)

RESET BUTTON :
Resets the timer and time interval , displays '00:00:00' in the output section and resets the inner text of the RESUME button to START button.

![image](https://user-images.githubusercontent.com/60548103/224165628-8d5e6fe1-1901-4430-b352-03ae5828d2bc.png)
