<script lang="ts">
    import { enhance } from '$app/forms';
    import Toast from '$lib/components/Toast.svelte';

    export let form;
</script>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{/if}

<section>
    <!-- CodePen @meodai for input styling -->
    <form method="POST" use:enhance>
        <label class="input">
            <input type="text" name="name" class="input__field" placeholder=" " required />
            <span class="input__label">Name</span>
        </label>
        <label class="input">
            <input type="email" name="email" class="input__field" placeholder=" " required />
            <span class="input__label">Email</span>
        </label>
        <label class="input">
            <textarea name="what" class="desc__field" placeholder=" " required></textarea>
            <span class="desc__label">Description</span>
        </label>
        <button>Submit</button>
    </form>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        width: 600px;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 20px;
    }

    @media screen and (max-width: 650px) {
        form {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }

    .input {
        position: relative;
        width: 100%;
    }

    textarea { 
        resize: vertical;
        height: 150px;
        font-family: sans-serif;
        line-height: 1.2;
    }

    input {
        font-family: sans-serif;
    }

    .input__field,
    .desc__field {
        box-sizing: border-box;
        display: block;
        width: 100%;
        border: 3px solid currentColor;
        padding: calc(.5rem * 1.5) .5rem;
        color: currentColor;
        background: transparent;
        border-radius: 4px;
    }

    .input__label,
    .desc__label {
        position: absolute;
        left: 0;
        top: -2px;
        padding: calc(.5rem * 0.75) calc(.5rem * .5);
        margin: calc(.5rem * 0.75 + 3px) calc(.5rem * .5);
        white-space: nowrap;
        transform: translate(0, 0);
        transform-origin: 0 0;
        background: #ffffff00;
        transition: transform 120ms ease-in, background 120ms ease-in 50ms;
        font-weight: bold;
        line-height: 1.2;
        cursor: text;
    }

    .input__field:focus + .input__label,
    .input__field:not(:placeholder-shown) + .input__label{
        transform: translate(.25rem, -65%) scale(.8);
        background: #ffffff;
        /* color: #fab700; */
        cursor: default;
    }

    .desc__field:focus + .desc__label,
    .desc__field:not(:placeholder-shown) + .desc__label{
        transform: translate(.25rem, -65%) scale(.8);
        background: #ffffff;
        /* color: #fab700; */
        cursor: default;
    }

    button {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 4px;
        font-family: "Open Sans", sans-serif;
        background-color: black;
        color: #ffffff;
        cursor: pointer;
        /* font-weight: bold; */
    }
</style>