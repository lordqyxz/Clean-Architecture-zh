import{_ as t,r as n,o,c as s,b as i,w as c,d as p,e}from"./app.bf031727.js";const l="/Clean-Architecture-zh/assets/CH-UN06.44b82967.jpg",r={},u=e('<h1 id="chap6-functional-programming-函数式编程" tabindex="-1"><a class="header-anchor" href="#chap6-functional-programming-函数式编程" aria-hidden="true">#</a> Chap6. FUNCTIONAL PROGRAMMING 函数式编程</h1><p><img src="'+l+`" alt=""></p><p>In many ways, the concepts of functional programming predate programming itself. This paradigm is strongly based on the l-calculus invented by Alonzo Church in the 1930s.</p><blockquote><p>函数式编程所依赖的原理，在很多方面其实是早于编程本身出现的。因为函数式编程这种范式强烈依赖于 Alonzo Church 在 20 世纪 30 年代发明的 λ 演算。</p></blockquote><h2 id="squares-of-integers-整数平方" tabindex="-1"><a class="header-anchor" href="#squares-of-integers-整数平方" aria-hidden="true">#</a> SQUARES OF INTEGERS 整数平方</h2><p>To explain what functional programming is, it’s best to examine some examples. Let’s investigate a simple problem: printing the squares of the first 25 integers.</p><blockquote><p>我们最好还是用一个例子来解释什么是函数式编程。请看下面的这个例子：这段代码想要输出前 25 个整数的平方值。</p></blockquote><p>In a language like Java, we might write the following:</p><blockquote><p>如果使用 Java 语言，代码如下：</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Squint</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">25</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In a language like Clojure, which is a derivative of Lisp, and is functional, we might implement this same program as follows:</p><blockquote><p>下面我们改用 Clojure 语言来写这个程序，Clojure 是 LISP 语言的一种衍生体，属于函数式编程语言。其代码如下：</p></blockquote><div class="language-lisp line-numbers-mode" data-ext="lisp"><pre class="language-lisp"><code><span class="token punctuation">(</span><span class="token car">println</span> <span class="token punctuation">(</span><span class="token car">take</span> <span class="token number">25</span> <span class="token punctuation">(</span><span class="token car">map</span> <span class="token punctuation">(</span><span class="token car">fn</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token car">*</span> x x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">range</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you don’t know Lisp, then this might look a little strange. So let me reformat it a bit and add some comments.</p><blockquote><p>如果读者对 LISP 不熟悉，这段代码可能看起来很奇怪。没关系，让我们换一种格式，用注释来说明一下吧：</p></blockquote><div class="language-lisp line-numbers-mode" data-ext="lisp"><pre class="language-lisp"><code><span class="token punctuation">(</span><span class="token car">println</span> <span class="token comment">;___________________ Print</span>
  <span class="token punctuation">(</span><span class="token car">take</span> <span class="token number">25</span> <span class="token comment">;_________________ the first 25</span>
    <span class="token punctuation">(</span><span class="token car">map</span> <span class="token punctuation">(</span><span class="token car">fn</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token car">*</span> x x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">;__ squares</span>
      <span class="token punctuation">(</span><span class="token car">range</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">;___________ of Integers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It should be clear that println, take, map, and range are all functions. In Lisp, you call a function by putting it in parentheses. For example, (range) calls the range function.</p><blockquote><p>很明显，这里的 println、take、map 和 range 都是函数。在 LISP 中，函数是通过括号来调用的，例如（range）表达式就是在调用 range 函数。</p></blockquote><p>The expression <code>(fn [x] (* x x))</code> is an anonymous function that calls the multiply function, passing its input argument in twice. In other words, it computes the square of its input.</p><blockquote><p>而表达式 <code>(fn [x] (* xx))</code> 则是一个匿名函数，该函数用同样的值作为参数调用了乘法函数。换句话说，该函数计算的是平方值。</p></blockquote><p>Looking at the whole thing again, it’s best to start with the innermost function call.</p><blockquote><p>现在让我们回过头再看一下这整句代码，从最内侧的函数调用开始：</p></blockquote><ul><li>The range function returns a never-ending list of integers starting with 0.</li><li>This list is passed into the map function, which calls the anonymous squaring function on each element, producing a new never-ending list of all the squares.</li><li>The list of squares is passed into the take function, which returns a new list with only the first 25 elements.</li><li>The println function prints its input, which is a list of the first 25 squares of integers.</li></ul><hr><blockquote><ul><li>range 函数会返回一个从 0 开始的整数无穷列表。</li><li>然后该列表会被传入 map 函数，并针对列表中的每个元素，调用求平方值的匿名函数，产生了一个无穷多的、包含平方值的列表。</li><li>接着再将这个列表传入 take 函数，后者会返回一个仅包含前 25 个元素的 新列表。</li><li>println 函数将它的参数输出，该参数就是上面这个包含了 25 个平方值的 列表。</li></ul></blockquote><p>If you find yourself terrified by the concept of never-ending lists, don’t worry. Only the first 25 elements of those never-ending lists are actually created. That’s because no element of a never-ending list is evaluated until it is accessed.</p><blockquote><p>读者不用担心上面提到的无穷列表。因为这些列表中的元素只有在被访问时才会被创建，所以实际上只有前 25 个元素是真正被创建了的。</p></blockquote><p>If you found all of that confusing, then you can look forward to a glorious time learning all about Clojure and functional programming. It is not my goal to teach you about these topics here.</p><blockquote><p>如果上述内容还是让读者觉得云里雾里的话，可以自行学习一下 Clojure 和函数式编程，本书的目标并不是要教你学会这门语言，因此不再展开。</p></blockquote><p>Instead, my goal here is to point out something very dramatic about the difference between the Clojure and Java programs. The Java program uses a mutable variable—a variable that changes state during the execution of the program. That variable is i—the loop control variable. No such mutable variable exists in the Clojure program. In the Clojure program, variables like x are initialized, but they are never modified.</p><blockquote><p>相反，我们讨论它的主要目标是要突显出 Clojure 和 Java 这两种语言之间的巨大区别。在 Java 程序中，我们使用的是可变量，即变量 i，该变量的值会随着程序执行的过程而改变，故被称为循环控制变量。而 Clojure 程序中是不存在这种变量的，变量 x 一旦被初始化之后，就不会再被更改了。</p></blockquote><p>This leads us to a surprising statement: Variables in functional languages do not vary.</p><blockquote><p>这句话有点出人意料：函数式编程语言中的变量（Variable）是不可变（Vary）的。</p></blockquote><h2 id="immutability-and-architecture-不可变性与软件架构" tabindex="-1"><a class="header-anchor" href="#immutability-and-architecture-不可变性与软件架构" aria-hidden="true">#</a> IMMUTABILITY AND ARCHITECTURE 不可变性与软件架构</h2><p>Why is this point important as an architectural consideration? Why would an architect be concerned with the mutability of variables? The answer is absurdly simple: All race conditions, deadlock conditions, and concurrent update problems are due to mutable variables. You cannot have a race condition or a concurrent update problem if no variable is ever updated. You cannot have deadlocks without mutable locks.</p><blockquote><p>为什么不可变性是软件架构设计需要考虑的重点呢？为什么软件架构帅要操心变量的可变性呢？答案显而易见：所有的竞争问题、死锁问题、并发更新问题都是由可变变量导致的。如果变量永远不会被更改，那就不可能产生竞争或者并发更新问题。如果锁状态是不可变的，那就永远不会产生死锁问题。</p></blockquote><p>In other words, all the problems that we face in concurrent applications—all the problems we face in applications that require multiple threads, and multiple processors—cannot happen if there are no mutable variables.</p><blockquote><p>换句话说，一切并发应用遇到的问题，一切由于使用多线程、多处理器而引起的问题，如果没有可变变量的话都不对能发生。</p></blockquote><p>As an architect, you should be very interested in issues of concurrency. You want to make sure that the systems you design will be robust in the presence of multiple threads and processors. The question you must be asking yourself, then, is whether immutability is practicable.</p><blockquote><p>作为一个软件架构师，当然应该要对并发问题保持高度关注。我们需要确保自己设计的系统在多线程、多处理器环境中能稳定工作。所以在这里，我们实际应该要问的问题是：不可变性是否实际可行？</p></blockquote><p>The answer to that question is affirmative, if you have infinite storage and infinite processor speed. Lacking those infinite resources, the answer is a bit more nuanced. Yes, immutability can be practicable, if certain compromises are made.</p><blockquote><p>如果我们能忽略存储器与处理器在速度上的限制，那么答案是肯定的。否则的话，不可变性只有在一定情况下是可行的。</p></blockquote><p>Let’s look at some of those compromises.</p><blockquote><p>下面让我们来看一下它具体该如何做到可行。</p></blockquote><h2 id="segregation-of-mutability-可变性的隔离" tabindex="-1"><a class="header-anchor" href="#segregation-of-mutability-可变性的隔离" aria-hidden="true">#</a> SEGREGATION OF MUTABILITY 可变性的隔离</h2><p>One of the most common compromises in regard to immutability is to segregate the application, or the services within the application, into mutable and immutable components. The immutable components perform their tasks in a purely functional way, without using any mutable variables. The immutable components communicate with one or more other components that are not purely functional, and allow for the state of variables to be mutated (Figure 6.1).</p><blockquote><p>一种常见方式是将应用程序，或者是应用程序的内部服务进行切分，划分为可变的和不可变的两种组件。不可变组件用纯函数的方式来执行任务，期间不更改任何状态。这些不可变的组件将通过与一个或多个非函数式组件通信的方式来修改变量状态（参见图 6.1）。</p></blockquote>`,47),h=e(`<p>Since mutating state exposes those components to all the problems of concurrency, it is common practice to use some kind of transactional memory to protect the mutable variables from concurrent updates and race conditions.</p><blockquote><p>由于状态的修改会导致一系列并发问题的产生，所以我们通常会采用某种事务型内存来保护可变变量，避免同步更新和竞争状态的发生。</p></blockquote><p>Transactional memory simply treats variables in memory the same way a database treats records on disk. It protects those variables with a transaction or retry-based scheme.</p><blockquote><p>事务型内存基本上与数据库保护磁盘数据的方式类似，通常釆用的是事务或者重试机制。</p></blockquote><p>A simple example of this approach is Clojure’s atom facility:</p><blockquote><p>下面我们可以用 Clojure 中的 <code>atom</code> 机制来写一个简单的例子：</p></blockquote><div class="language-clojure line-numbers-mode" data-ext="clojure"><pre class="language-clojure"><code><span class="token punctuation">(</span><span class="token keyword">def</span> counter <span class="token punctuation">(</span><span class="token function">atom</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; initialize counter to 0</span>
<span class="token punctuation">(</span><span class="token function">swap!</span> counter inc<span class="token punctuation">)</span>    <span class="token comment">; safely increment counter.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>In this code, the counter variable is defined as an atom. In Clojure, an atom is a special kind of variable whose value is allowed to mutate under very disciplined conditions that are enforced by the swap! function.</p><blockquote><p>在这段代码中，counter 变量被定义为 atom 类型。在 Clojure 中，<code>atom</code> 是一类特殊的变量，它被允许在 <code>swap!</code> 函数定义的严格条件下进行更改。</p></blockquote><p>The swap! function, shown in the preceding code, takes two arguments: the atom to be mutated, and a function that computes the new value to be stored in the atom. In our example code, the counter atom will be changed to the value computed by the inc function, which simply increments its argument.</p><blockquote><p>至于 swap! 函数，如同上面代码所写，它需要两个参数：一个是被用来修改的 atom 类型实例，另一个是用来计算新值的函数。在上面的代码中，inc 函数会将参数加 1 并存入 counter 这个 atom 实例。</p></blockquote><p>The strategy used by swap! is a traditional compare and swap algorithm. The value of counter is read and passed to inc. When inc returns, the value of counter is locked and compared to the value that was passed to inc. If the value is the same, then the value returned by inc is stored in counter and the lock is released. Otherwise, the lock is released, and the strategy is retried from the beginning.</p><blockquote><p>在这里，swap!所采用的策略是传统的比较+替换算法。即先读取 counter 变量的值，再将其传入 inc 函数。然后当 inc 函数返回时，将原先用锁保护起来的 counter 值与传入 inc 时的值进行比较。如果两边的值一致，则将 inc 函数返回的值存入 counter，释放锁。否则，先释放锁，再从头进行重试。</p></blockquote><p>The atom facility is adequate for simple applications. Unfortunately, it cannot completely safeguard against concurrent updates and deadlocks when multiple dependent variables come into play. In those instances, more elaborate facilities can be used.</p><blockquote><p>当然，atom 这个机制只适用于上面这种简单的应用程序，它并不适用于解决由多个相关变量同时需要更改所引发的并发更新问题和死锁问题，要想解决这些问题，我们就需要用到更复杂的机制。</p></blockquote><p>The point is that well-structured applications will be segregated into those components that do not mutate variables and those that do. This kind of segregation is supported by the use of appropriate disciplines to protect those mutated variables.</p><blockquote><p>这里的要点是：一个架构设计良好的应用程序应该将状态修改的部分和不需要修改状态的部分隔离成单独的组件，然后用合适的机制来保护可变量。</p></blockquote><p>Architects would be wise to push as much processing as possible into the immutable components, and to drive as much code as possible out of those components that must allow mutation.</p><blockquote><p>软件架构师应该着力于将大部分处理逻辑都归于不可变组件中，可变状态组件的逻辑应该越少越好。</p></blockquote><h2 id="event-sourcing-事件溯源" tabindex="-1"><a class="header-anchor" href="#event-sourcing-事件溯源" aria-hidden="true">#</a> EVENT SOURCING 事件溯源</h2><p>The limits of storage and processing power have been rapidly receding from view. Nowadays it is common for processors to execute billions of instructions per second and to have billions of bytes of RAM. The more memory we have, and the faster our machines are, the less we need mutable state.</p><blockquote><p>随着存储和处理能力的大幅进步，现在拥有每秒可以执行数十亿条指令的处理器，以及数十亿字节内存的计算机已经很常见了。而内存越大，处理速度越快，我们对可变状态的依赖就会越少。</p></blockquote><p>As a simple example, imagine a banking application that maintains the account balances of its customers. It mutates those balances when deposit and withdrawal transactions are executed.</p><blockquote><p>举个简单的例子，假设某个银行应用程序需要维护客户账户余额信息，当它放行存取款事务时，就要同时负责修改余额记录。</p></blockquote><p>Now imagine that instead of storing the account balances, we store only the transactions. Whenever anyone wants to know the balance of an account, we simply add up all the transactions for that account, from the beginning of time. This scheme requires no mutable variables.</p><blockquote><p>如果我们不保存具体账户余额，仅仅保存事务日志，那么当有人想查询账户余额时。我们就将全部交易记录取出，并且每次都得从最开始到当下进行累计。当然，这样的设计就不需要维护任何可变变量了。</p></blockquote><p>Obviously, this approach sounds absurd. Over time, the number of transactions would grow without bound, and the processing power required to compute the totals would become intolerable. To make this scheme work forever, we would need infinite storage and infinite processing power.</p><blockquote><p>但显而易见，这种实现是有些不合理的。因为随着时间的推移，事务的数目会无限制增长，每次处理总额所需要的处理能力很快就会变得不能接受。如果想使这种设计永远可行的话，我们将需要无限容量的存储，以及无限的处理能力。</p></blockquote><p>But perhaps we don’t have to make the scheme work forever. And perhaps we have enough storage and enough processing power to make the scheme work for the reasonable lifetime of the application.</p><blockquote><p>但是可能我们并不需要这个设计永远可行，而且可能在整个程序的生命周期内，我们有足够的存储和处理能力来满足它。</p></blockquote><p>This is the idea behind event sourcing.2 Event sourcing is a strategy wherein we store the transactions, but not the state. When state is required, we simply apply all the transactions from the beginning of time.</p><blockquote><p>这就是事件溯源，在这种体系下，我们只存储事务记录，不存储具体状态。当需要具体状态时，我们只要从头开始计算所有的事务即可。</p></blockquote><p>Of course, we can take shortcuts. For example, we can compute and save the state every midnight. Then, when the state information is required, we need compute only the transactions since midnight.</p><p>Now consider the data storage required for this scheme: We would need a lot of it. Realistically, offline data storage has been growing so fast that we now consider trillions of bytes to be small—so we have a lot of it.</p><blockquote><p>在存储方面，这种架构的确需要很大的存储容量。如今离线数据存储器的增长是非常快的，现在 1 TB 对我们来说也已经不算什么了。</p></blockquote><p>More importantly, nothing ever gets deleted or updated from such a data store. As a consequence, our applications are not CRUD; they are just CR. Also, because neither updates nor deletions occur in the data store, there cannot be any concurrent update issues.</p><blockquote><p>更重要的是，这种数据存储模式中不存在删除和更新的情况，我们的应用程序不是 CRUD，而是 CR。因为更新和删除这两种操作都不存在了，自然也就不存在并发问题。</p></blockquote><p>If we have enough storage and enough processor power, we can make our applications entirely immutable—and, therefore, entirely functional.</p><blockquote><p>如果我们有足够大的存储量和处理能力，应用程序就可以用完全不可变的、纯函数式的方式来编程。</p></blockquote><p>If this still sounds absurd, it might help if you remembered that this is precisely the way your source code control system works.</p><blockquote><p>如果读者还是觉得这听起来不太靠谱，可以想想我们现在用的源代码管理程序，它们正是用这种方式工作的！</p></blockquote><h2 id="conclusion-本章小结" tabindex="-1"><a class="header-anchor" href="#conclusion-本章小结" aria-hidden="true">#</a> CONCLUSION 本章小结</h2><p>To summarize:</p><blockquote><p>下面我们来总结一下：</p></blockquote><ul><li>Structured programming is discipline imposed upon direct transfer of control.</li><li>Object-oriented programming is discipline imposed upon indirect transfer of control.</li><li>Functional programming is discipline imposed upon variable assignment.</li></ul><hr><blockquote><ul><li>结构化编程是多对程序控制权的直接转移的限制。</li><li>面向对象编程是对程序控制权的间接转移的限制。</li><li>函数式编程是对程序中赋值操作的限制。</li></ul></blockquote><p>Each of these three paradigms has taken something away from us. Each restricts some aspect of the way we write code. None of them has added to our power or our capabilities.</p><blockquote><p>这三个编程范式都对程序员提出了新的限制。每个范式都约束了某种编写代码的方式，没有一个编程范式是在增加新能力。</p></blockquote><p>What we have learned over the last half-century is what not to do.</p><blockquote><p>也就是说，我们过去 50 年学到的东西主要是——什么不应该做。</p></blockquote><p>With that realization, we have to face an unwelcome fact: Software is not a rapidly advancing technology. The rules of software are the same today as they were in 1946, when Alan Turing wrote the very first code that would execute in an electronic computer. The tools have changed, and the hardware has changed, but the essence of software remains the same.</p><blockquote><p>我们必须面对这种不友好的现实：软件构建并不是一个迅速前进的技术。今天构建软件的规则和 1946 年阿兰·图灵写下电子计算机的第一行代码时是一样的。尽管工具变化了，硬件变化了，但是软件编程的核心没有变。</p></blockquote><p>Software—the stuff of computer programs—is composed of sequence, selection, iteration, and indirection. Nothing more. Nothing less.</p><blockquote><p>总而言之，软件，或者说计算机程序无一例外是由顺序结构、分支结构、循环结构和间接转移这几种行为组合而成的，无可增加，也缺一不可。</p></blockquote>`,55);function d(m,b){const a=n("Figures");return o(),s("div",null,[u,i(a,{figure:"6-1"},{default:c(()=>[p("Mutating state and transactional memory")]),_:1}),h])}const f=t(r,[["render",d],["__file","ch6.html.vue"]]);export{f as default};