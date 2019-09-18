<script>
  import IllustrationMain from "../../../assets/images/IllustrationMain.svelte";
  export let name = "John";
</script>

<style lang="scss" type="text/scss" src="./Home.scss">

</style>

<div id="home-container">

  <div id="two-side-container__left">
    <IllustrationMain />
  </div>

  <div id="two-side-container__right">
    <div id="two-side-container__right--content">

      <h1>All your files in one secure location, accessible anywhere</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family and
        co-workers.
      </p>

      <h3>Sign up for early access</h3>
      <div id="two-side-container__email">
        <input />
        <button>Sign Up</button>
      </div>
    </div>
  </div>
</div>
