设置打开后默认路径：

​	git 图标右键-属性，删除 --cd-to-home

​	起始位置：自己的工作空间路径

1）	填写名字和邮箱作为用户标识

​	git config --global user.email "你的邮箱" 

​	git config --global user.name "你的名字" 



#### github 基本操作

2）	初始化仓库

​	pwd显示当前路径

​	1）`git init `初始化目录为管理的仓库

3）提交文件

​	先添加再提交

​	1.将文件添加到仓库

​	 	git add 文件名

​			向远程仓库提交时需用 `git add .`注意用点，否则提交后远程仓库不显示文件

​		每次的修改都会保存在 stage 中，提交相同的文件不会覆盖。最后将所有修改一同提交

​	2.将文件提交到仓库

​		git -commit -m “说明”		-m后面为本次提交的说明



​		工作区：仓库下的目录除 .git 文件夹

​		版本库： .git 文件夹

​		git add ： 将文件放入 stage（暂存区）

​		git commit： 将暂存区的文件一次性全部提交到分支



![0](C:\Users\tzy\Desktop\笔记\img-git\0.jpg)

4）查看当前仓库的状态

​	 `git status`

5）查看之前修改的内容

​	 `git diff`	仅能查看文件保存后，但并未 git add 时的修改内容

6） 查看 commit 的提交记录

​	 `git log` 	或  git log --pretty=oneline（简化输出信息，每次的提交信息单行显示）

7）回退版本

​	 `git reset --hard HEAD^（回退到上一个版本）` HEAD^^(回退前到两个版本) HEAD~100（回退到第100个版本）

​	 `git reset --hard 版本号开头前几位` （回退到该版本，多写几位避免重复）

8）命令历史

​	 `git reflog  `  显示之前每次用的命令

9）丢弃工作区修改

​	 `git checkout -- file`	将文件回到最近一次 git add 或 git commit 时的状态

10） 丢弃暂存区的修改

 	 `git reset -- flie`	将暂存区的修改回退到工作区

11）删除文件

​	当删除某个文件后，依然要 git 该文件  ，然后 commit

或者用 `git rm`  然后 `git commit`

12）删除缓存

  `git rm -r --cached .`，在设置`.gitignore` 无效时使用该命令重新提交



#### 连接 github

​	1）github 创建仓库

​	2）git remote add origin git@github.com:my_github_username/repository_name.git 连接远程仓库		每次本地新建的仓库都要重新连接。如果已存在，用`$ git remote rm origin `删除原来的

​	3）git push -u origin master	  第一次向仓库推送（后续推送不需要 -u 命令 设置为默认仓库）	出现提示输入 yes。 

​	由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。 之后继续提交不需要 -u 

​	4）从 github 克隆仓库到本地

​	git  clone git@github.com:tangzhiyao/repository_name.git



#### 分支

​	1）使用 git checkout -b 分支名	创建并切换到该分支。

​		或者分两步进行

​		1）`git branch` 分支名		创建分支分支

​		2）`git checkout` 分支名		切换分支			

​	2）`git branch` 查看当前分支；当前分支前面带有一个`*`，只有在分支有 git commit 后才会显示。

​	3）`git merge` 分支名，将该分支与当前分支合并。	加上 --no-ff 取消快速合并（保留历史分支）

​	4）`git branch -d` 分支名，删除分支

​	5）当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

​		解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。

​		用`git log --graph`命令可以看到分支合并图。

​	6）git fetch 获取远程分支

#### 保存临时工作

  	1） `git stash` 存储当前正在工作的分支的内容。方便切换到其他分支去工作完成后继续回来工作。可以多次保存。在使用之前需要先 git add 提交一遍

​	2） `git stash list` 查看保存的工作现场列表

​	3） `git stash apply` 恢复工作现场，但 stash 中的内容需要用 `git stash drop` 来手动删除

​	4） `git stash apply stash@{0}` 恢复指定的 stash

​	5） `git stash pop `  恢复工作现场，并且删除 stash 中的内容	

#### 多人协作

​	1）`git remote` 查看远程库信息		-v 显示详细信息；如果没有推送权限，就看不到push的地址。 

​	2）`git push origin branch_name`	向远程库推送分支

#### 推送分支

- `master`分支是主分支，因此要时刻与远程同步；
- `dev`分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
- bug分支只用于在本地修复bug，就没必要推到远程了；
- feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。



​	

​	1）查看远程库信息，使用`git remote -v`；

​	2）本地新建的分支如果不推送到远程，对其他人就是不可见的；

​	3）从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；

​	4）在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；

​	5）建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；

​	6）从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。



连接远程库时的问题：

​		在连接 `远程库分支` 时，需要本地先 `git add .`   `git commit -m"msg"` 之后才能连接到远程库的分支。否则会报错：分支不存在；

​		解决从远程 pull 时无法融合（fatal:refusing to merge unrelated history）；git pull origin master --allow-unrelated-histories 



场景1）添加一个新功能时，不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。 

#### 设置忽略文件

  1. 手动创建 .gitignore 文件，需要在命令行中使用`touch .gitignore` ，否则需要提交 该文件之后才起作用

  2. 之前添加过，后来需要新增排除项

     ```bash
     git rm -r --cached .
     git add .
     git commit -m"修改gitignore"
     ```



Github 提交不上去

> 错误信息:
>
> Please make sure you have the correct access rights
> and the repository exists.

 由于用的是新电脑，没有配置 SSH key 导致的。

```bash
# git 的邮箱
ssh-keygen -t ras -C "335406905@qq.com"
# 一直回车, 不需要进行填写
# 找到创建目下的 .pub 后缀的文件，打开复制内容。打开github个人设置，找到ssh设置，添加新的ssh即可 
```

