<script>
  import { count } from '../store.js';
  let count_value;

  count.subscribe((value) => {
    count_value = value;
  });
</script>

<h1>The count is {count_value}</h1>
