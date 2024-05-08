<header>
    <nav>
        <a href="/">Home</a>
        <!-- <a href="/gallery">Gallery</a> -->
        <a href="/contact" class="fancy">Contact Us</a>
    </nav>
</header>
<main>
    <slot />
</main>

<style>
    :global(body) {
        width: 100vw;
        height: 100vh;
        height: 100dvh;
        background-image: url(/excavator.png);
        background-size: cover;
        background-position: 50% 50%;
        display: grid;
        grid-template-rows: 70px auto;
    }

    header {
        background-color: #000000a6;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
    }

    header nav {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    a {
        color: #ffffff;
        font-family: "Open Sans", sans-serif;
        text-decoration: none;
        border-bottom: 1px solid white;
    }

    main {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #00000077;
    }

    .fancy {
        background-color: #ff7b00;
        font-size: 0.9rem;
        padding: 10px;
        text-decoration: none;
        color: #ffffff;
        border-radius: 100vw;
        border-bottom: none;
    }
</style>