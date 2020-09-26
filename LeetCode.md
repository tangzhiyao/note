1. 给你一个数组 favoriteCompanies ，其中 favoriteCompanies[i] 是第 i 名用户收藏的公司清单（下标从 0 开始）。请找出不是其他任何人收藏的公司清单的子集的收藏清单，并返回该清单下标。下标需要按升序排列。

   > 示例 1：
   >
   > 输入：favoriteCompanies = [["leetcode","google","facebook"],["leetcode","amazon"],["facebook","google"]]
   >
   > 输出：[0,1] 
   >
   > 解释：favoriteCompanies[2]=["facebook","google"] 是 favoriteCompanies[0]=["leetcode","google","facebook"] 的子集，因此，答案为 [0,1] 。

   > 示例 2：
   >
   > 输入：favoriteCompanies = [["leetcode"],["google"],["facebook"],["amazon"]]
   >
   > 输出：[0,1,2,3]

   提示：

   1. 1 <= favoriteCompanies.length <= 100
   2. 1 <= favoriteCompanies[i].length <= 500
   3. 1 <= favoriteCompanies[i][j].length <= 20
   4. favoriteCompanies[i] 中的所有字符串 各不相同 。
   5. 用户收藏的公司清单也 各不相同 ，也就是说，即便我们按字母顺序排序每个清单， favoriteCompanies[i] != favoriteCompanies[j] 仍然成立。
   6. 所有字符串仅包含小写英文字母。

   链接：<https://leetcode-cn.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list>

   题解：我的第一想法是如何判断两个数组(arr1, arr2)之间是否有子集的关系。这个解决后，后面即使双循环判断也能够解出这道题。

   判断两个数组间的关系，我使用了 es6 的 Set 数据结构，Set 的特点：Set 和 数组 Array 很相似，最主要的是 Set 结构里没有重复的元素，因此 Set 也能够用来去重。通过 Set 将需要判断的两个数组去重，得到两个数组中所有不同的元素。如果去重后的 Set 大小大于 Max(arr1.length, arr2.length)， 则 arr1 和 arr2 没有子集的关系，否则 长度短的数组是较长数组的子集。

   代码实现：<https://leetcode-cn.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solution/tong-guo-setjie-gou-pan-duan-zi-ji-by-tttzy-2/>

2. 「句子」是一个用空格分隔单词的字符串。给你一个满足下述格式的句子 `text` :

   - 句子的首字母大写
   - `text` 中的每个单词都用单个空格分隔。

   请你重新排列 `text` 中的单词，使所有单词按其长度的升序排列。如果两个单词的长度相同，则保留其在原句子中的相对顺序。请同样按上述格式返回新的句子。

   > 示例 1：
   >
   > 输入：text = "Leetcode is cool"
   >
   > 输出："Is cool leetcode"
   >
   > 解释：句子中共有 3 个单词，长度为 8 的 "Leetcode" ，长度为 2 的 "is" 以及长度为 4 的 "cool" 。
   >
   > 输出需要按单词的长度升序排列，新句子中的第一个单词首字母需要大写。

   > 示例 2：
   >
   > 输入：text = "Keep calm and code on"
   >
   > 输出："On and keep calm code"
   >
   > 解释：输出的排序情况如下：
   >
   > "On" 2 个字母。
   >
   > "and" 3 个字母。
   >
   > "keep" 4 个字母，因为存在长度相同的其他单词，所以它们之间需要保留在原句子中的相对顺序。
   >
   > "calm" 4 个字母。
   >
   > "code" 4 个字母。

   > 示例 3：
   >
   > 输入：text = "To be or not to be"
   >
   > 输出："To be or to be not"


   提示：

   * text 以大写字母开头，然后包含若干小写字母以及单词间的单个空格。
   * 1 <= text.length <= 10^5

   链接：https://leetcode-cn.com/problems/rearrange-words-in-a-sentence

   题解：本题只是普通排序，只是将数字变成字符，根据字符串的长度排序。但是题目中还有要求：保留原句中的相对顺序，所以排序算法只能够选择稳定排序。

   代码：<https://leetcode-cn.com/problems/rearrange-words-in-a-sentence/solution/sort-by-tttzy-2/>   

   > 关于 sort 方法：本来认为 sort 方法应该是过不了的(之前的理解，排序数组元素较少是使用插入排序，元素较多时是快排)，没想到居然通过了。
   >
   > 特地去查了下：
   >
   > 不同浏览器对sort的实现方式不同，有的是稳定排序有的不是，所以在使用的时候需要注意。
   >
   > * Array.prototype.sort 现在在V8 v7.0 / Chrome 70中稳定！
   > * 以前，V8对具有10个以上元素的数组使用不稳定的QuickSort。现在，我们使用稳定的TimSort算法。
   > * 本题运行环境 Nodejs 12.16.3，所以此题能够通过

3. 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

   给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

   返回可以通过分割得到的平衡字符串的最大数量。

    

   > 示例 1：
   >
   > 输入：s = "RLRRLLRLRL"
   >
   > 输出：4
   >
   > 解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。

   > 示例 2：
   >
   > 输入：s = "RLLLLRRRLR"
   >
   > 输出：3
   >
   > 解释：s 可以分割为 "RL", "LLLRRR", "LR", 每个子字符串中都包含相同数量的 'L' 和 'R'。

   > 示例 3：
   >
   > 输入：s = "LLLLRRRR"
   >
   > 输出：1
   >
   > 解释：s 只能保持原样 "LLLLRRRR".


   提示：

   * 1 <= s.length <= 1000
   * s[i] = 'L' 或 'R'
   * 分割得到的每个字符串都必须是平衡字符串。

   链接：https://leetcode-cn.com/problems/split-a-string-in-balanced-strings

   题解：由于分割出的每个字符串都是平衡字符串，所以直接循环，判断L和R的数量是否相等，每次相等的时候，平衡字符串数量加1

   代码：<https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/solution/yi-ci-xun-huan-by-tttzy-2/> 

4. 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

   > 示例 1：
   >
   > 输入：[-4,-1,0,3,10]
   >
   > 输出：[0,1,9,16,100]

   > 示例 2：
   >
   > 输入：[-7,-3,2,3,11]
   >
   > 输出：[4,9,9,49,121]


   提示：

   * 1 <= A.length <= 10000
   * -10000 <= A[i] <= 10000
   * A 已按非递减顺序排序。

   链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array

   题解：第一反应是直接把所有元素平方再通过sort排序。之后再想下，可以找到从负数到正数的拐点，使用双指针，从两边分别开始比较(负数和正数都是有序的)，合并数组。

   看了其他人题解后，其实双指针直接从数组的两边开始就可以了，到了拐点就停，避免了去寻找拐点的一次循环

   代码：<https://leetcode-cn.com/problems/squares-of-a-sorted-array/solution/shuang-zhi-zhen-diao-yong-apide-jian-dan-xie-fa-by/> 

5. 最初在一个记事本上只有一个字符 'A'。你每次可以对这个记事本进行两种操作：

   Copy All (复制全部) : 你可以复制这个记事本中的所有字符(部分的复制是不允许的)。
   Paste (粘贴) : 你可以粘贴你上一次复制的字符。
   给定一个数字 n 。你需要使用最少的操作次数，在记事本中打印出恰好 n 个 'A'。输出能够打印出 n 个 'A' 的最少操作次数。

   > 示例 1:
   >
   > 输入: 3
   >
   > 输出: 3
   >
   > 解释:
   >
   > 最初, 我们只有一个字符 'A'。
   >
   > 第 1 步, 我们使用 Copy All 操作。
   >
   > 第 2 步, 我们使用 Paste 操作来获得 'AA'。
   >
   > 第 3 步, 我们使用 Paste 操作来获得 'AAA'。

   说明:

   1. n 的取值范围是 [1, 1000] 。

   链接：https://leetcode-cn.com/problems/2-keys-keyboard

   题解：实际上本题是分解质因数，分解出的所有质数相加的和即为答案

   代码：<https://leetcode-cn.com/problems/2-keys-keyboard/solution/zhi-yin-shu-fen-jie-by-tttzy-2/> 

6. 颜色分类

   给定一个包含红色、白色和蓝色，一共 n 个元素的数组，**[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)**对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

   此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

   `注意:`**不能使用代码库中的排序函数来解决这道题。**

   > 示例:
   > 输入: [2,0,2,1,1,0]
   > 输出: [0,0,1,1,2,2]

   链接：https://leetcode-cn.com/problems/sort-colors/solution/san-chong-si-lu-jian-dan-de-ti-jie-yi-ji-dui-guan-/

   题解：

   * 一开始审题不仔细，没有注意**原地**两个字。思路是：新创建了一个对象(obj)用来保存循环数组产生的0、1、2的个数，再根据 obj 返回一个新的数组。但这么做是无法通过提交的。只能对传入的 nums 直接进行操作才能通过(用新数组覆盖nums也不行)。

   * 通过查找资料后，知道了原地是什么意思。

     `原地算法`：是一种使用小的，固定数量的额外之空间来转换资料的算法。当算法执行时，输入的资料通常会被要输出的部份覆盖掉。 例如最常见的冒泡算法

     由于只有0、1、2三种数字，所以在排序的时候保证数组前面都是0，数组尾部都是2即可。 这道题我用了三个指针i、j、index。i 指向所有已排序数字 0 的后一个元素，j 指向所有已排序数字 2 的前一个元素。index 指向当前循环的数字

     ![1599988328380](C:\Users\tzy\Desktop\note\img-git\leetCode图解\颜色分类.png)

     例如此时，index 等于0，和 i 指向的元素进行交换，交换后 i 和 index 自增 1，index 自增后指向元素 2，再和 j 指向的元素进行交换，j 自减，index 不变。以此类推，当 index 大于等于 j 时结束循环。 

   代码：https://leetcode-cn.com/problems/sort-colors/solution/yan-se-jiao-huan-yi-ci-xun-huan-by-tttzy-2/

7. 有效的字母异位词
   给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

   > 示例 1:
   > 输入: s = "anagram", t = "nagaram"
   > 输出: true

   > 示例 2:
   > 输入: s = "rat", t = "car"
   > 输出: false

   说明:

   1. 你可以假设字符串只包含小写字母。

   进阶:

   1. 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？


   链接：https://leetcode-cn.com/problems/valid-anagram

   题解：

   * 直接用sort函数对两个字符串进行排序，然后返回比较结果；
   * 先对比两个字符串的长度，再对两个字符串进行循环，使用两个对象分别保存两个字符串中每个字符出现的次数，对比两个对象得出结果。
   * 基于上一种解法，只使用一个对象保存第一个字符串的循环结果，在对第二个字符串进行循环时，每出现一个字符，把对象中对应的键值减1，如果对应的键不存在或键值小于1，或者循环结束后对象中有键值不为0，则这两个字符串不是异位词。

   代码：https://leetcode-cn.com/problems/valid-anagram/solution/yi-wei-ci-yi-xing-dai-ma-by-tttzy-2/

8. 链表排序

   插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
   每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。

   插入排序算法：

   插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
   每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
   重复直到所有输入数据插入完为止。

   > 示例 1：
   > 输入: 4->2->1->3
   > 输出: 1->2->3->4

   > 示例 2：
   > 输入: -1->5->3->4->0
   > 输出: -1->0->3->4->5

   链接：<https://leetcode-cn.com/problems/insertion-sort-list>

   题解：

   * 简单一点，直接循环一次转化成数组再进行插入排序
   * 创建一个新指针(index)指向head，判断index指向节点的值是否大于后一个节点，如果大于后一个节点的值，将后一个节点取出，index的下一节点的指向改为后一个节点的指向，再从头节点开始循环判断找出取出节点需要插入的位置(值大于前一个节点小于后一个节点)。插入的过程是：前一个节点的指向赋值给需要插入的节点，并且前一个节点需要指向插入的节点。

   代码：https://leetcode-cn.com/problems/insertion-sort-list/solution/zhi-zhen-by-tttzy-2/





