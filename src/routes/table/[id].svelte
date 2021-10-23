<script context="module">
  export async function load({
    page,
    fetch,
    session,
    context
  }) {
    return {
      props: {
        id: page.params.id,
        limit: page.query.get('limit')
      }
    }
  }
</script>

<script lang="ts">
  import Table from '../../components/Table.svelte'

  /**
   * The NSR id of the bus stop
   */
  export let id: number
  /**
   * The limit of rows to display (max 7)
   */
  export let limit: number = 7
</script>

<Table
  resultLimit={ limit }
  stopPlaceId={ id }
/>