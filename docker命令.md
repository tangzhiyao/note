docker image ls		列出本机所有的 image 文件

docker image rm imageName		删除指定 image 文件；删不掉的时候切换到管理员权限

docker pull imageName	从仓库抓取到本地	

docker container ls		列出本机正在运行的 container 

docker container ls --all 	列出本机所有容器，包括终止运行的容器

docker container run -it ubuntu bash 	运行容器

* 后面加上 --rm 参数，在容器终止后会自动删除容器



docker container kill containerID	终止容器

docker container rm containerName 	删除容器

docker image build 指令 image名字  .	创建 image 文件

* `.` 表示当前文件夹



docker container run -p 8000:3000 -it koa-demo /bin/bash

* -p：容器的 3000 端口映射到本机的 8000 端口；
* -it：容器的 shell 映射到当前的 shell，然后在本机窗口输入的命令，就会传入容器中；
* koa-demo：image 文件的名字(默认为 latest)；
* /bin/bash：容器启动后，内部第一个执行的命令。这里是启动 bash，保证用户可以使用 shell；成功进入容器会有 shell 命令行提示符； 





Ctrl + d （或者输入 exit）退出容器 