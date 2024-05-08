<section class="row">
    <section class="column">
        <enhanced:img class="img" src="../../lib/gallery/img9.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/skidsteer.jpg" alt="Skidsteer" />
        <enhanced:img class="img" src="../../lib/gallery/img1.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img10.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img4.jpg" alt="Gallery" />
    </section>
    <section class="column">
        <enhanced:img class="img" src="../../lib/gallery/img2.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img5.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img6.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img7.jpg" alt="Gallery" />
    </section>
    <section class="column">
        <enhanced:img class="img" src="../../lib/gallery/img8.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img13.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img12.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img14.jpg" alt="Gallery" />
    </section>
    <section class="column">
        <enhanced:img class="img" src="../../lib/gallery/img3.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img16.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img15.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img17.jpg" alt="Gallery" />
        <enhanced:img class="img" src="../../lib/gallery/img11.jpg" alt="Gallery" />
    </section>
</section>

<style>
    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
        /* background-color: rgb(255, 255, 255); */
        height: fit-content;
        padding-bottom: 8px;
    }

    /* Create four equal columns that sits next to each other */
    .column {
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
    }

    /* .column picture {
        width: 100%;
    } */

    .img {
        margin-top: 8px;
        vertical-align: middle;
        max-width: 100%;
        /* max-height: 900px; */
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
        .column {
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .column {
            flex: 100%;
            max-width: 100%;
        }
    }
</style>