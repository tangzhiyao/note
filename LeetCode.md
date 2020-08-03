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
   >  * Array.prototype.sort 现在在V8 v7.0 / Chrome 70中稳定！
   >  * 以前，V8对具有10个以上元素的数组使用不稳定的QuickSort。现在，我们使用稳定的TimSort算法。
   >  * 本题运行环境 Nodejs 12.16.3，所以此题能够通过
   >

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