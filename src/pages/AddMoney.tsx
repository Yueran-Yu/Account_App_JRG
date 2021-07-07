import React from 'react';
import Layout from "../components/Layout";

const AddMoney = () => (
    <Layout>
        <section className='tags'>
            <ol>
                {/*
                shift * 2 => search : Surround with Emmet => type: li*
                This is the quick way to wrap <li> around content
                  */}
                <li>Residence</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Transportation</li>
            </ol>
        </section>
        <section>Notes</section>
        <section>Category</section>
        <section>NumberPad</section>
    </Layout>)

export default AddMoney;