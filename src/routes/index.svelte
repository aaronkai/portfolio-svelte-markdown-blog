<script context="module">
  const allPosts = import.meta.glob("./blogposts/*.md")
  let body = []
  for(let path in allPosts){
    body.push(allPosts[path]().then(({metadata}) => {
      return {path, metadata}
    })
    );
  }
  
  export const load = async() => {
    const posts = await Promise.all(body);
    return {
      props:{
        posts,
      },
    };
  };
</script>

<script>
  export let posts;
  const dateSortedPosts = posts.sort((post1, post2) => {
    return new Date(post2.metadata.date) - new Date(post1.metadata.date);
  });
</script>
<main class="bg-indigo-100 grid md:grid-cols-2 gap-8 pt-8 md:pt-0  ">
  <article class="border-gray-700 md:border-r-2 border-b-4 md:border-b-0">  
    <section class="px-4 md:px-8 md:pt-8">
      <h1 class="text-gray-900 text-3xl italic">
        Immanent <span class="text-gray-600 text-xl italic">adjective</span></h1>
      <ol class="list-decimal ml-16 my-4">
        <li class="mb-4">
          <p >
            indwelling, inherent
          </p>
          <p class="ml-4">
            "beauty is not something imposed but something <span class="italic">immanent</span>"
          </p>
          <p class="ml-4">
            — Anthony Burgess
          </p>

        </li>
        <li>
          <p>
            being within the limits of possible experience or knowledge
            
          </p>
          <p>
            — compare TRANSCENDENT
          </p>
        </li>
      </ol>
    </section>
    <section class="px-4 pt-8">
      <h2 class="text-gray-900 text-2xl">Prospectus</h2>
      <p class="text-gray-900 mb-4 ml-4">Oh no. Another Junior developer makes a blog. Water runs downhill. The sun rises in the morning. Blogs are good first steps into a new technology.</p>
      <p class="text-gray-900 mb-4 ml-4">Self criticism notwithstanding, I do like words and ordering them. I like keeping a journal of progress. This could be that. </p>
      <p class="text-gray-900 mb-4 ml-4">Or this could be another blog that dies on the vine.</p>
  
    </section>
  
  </article>
  <aside class="px-4 md:px-0 mb-8 md:pt-8">
    <h1 class="text-gray-900 text-3xl italic mb-4">
      Concerns 
      <span class="text-gray-600 text-xl italic">noun</span>
    </h1>
    <ol class="ml-4">
      {#each dateSortedPosts as {path, metadata: { title, tags, date }}}
      <li class="mb-8">
        <h2 class="mb-4">
            <a class="text-gray-900 text-xl underline mb-4 hover:text-indigo-900" 
              href={ `${path.replace(".md","")}` }>{title}
            </a>
            <span>
              {new Date(date).toDateString()}
            </span>
        </h2>

        <div class="flex">
          {#each tags as tag}
          <a class="bg-indigo-800 text-white py-1 px-2 m-1 rounded hover:bg-indigo-600" href={`/tags/${tag}`}>#{tag} </a>
          {/each}
        </div>

      </li>
    {/each}

    </ol>
  </aside>


</main>