<div class="Layout">
  <slot />

  <div class="credit">
    <p>Work in progress | v1.0.0-alpha.3</p>
    <p>Created by <a href="https://ttcom.no/">Mobit Stakkevollvegen</a></p>
  </div>
</div>


<style>
  .Layout {
    background: slategray;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .credit {
    display: flex;
    flex-direction: row;
    font-size: .8rem;
    justify-content: space-between;
    margin-top: auto;
    padding: 0 2rem;
    text-align: end;
    width: 100%;
  }
  a {
    color: var(--color);
    font-weight: 600;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>