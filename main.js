import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";

const supabaseUrl = 'https://xxoirudkvwrrsyyvjlts.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4b2lydWRrdndycnN5eXZqbHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzODExMTUsImV4cCI6MjA4Nzk1NzExNX0.PD2T3theTCzBveIF1szrJNFDgusceYEZA3qBtBqvxt0';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase Initialized:", supabase);

async function getBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    let bookList = document.getElementById('books');

    for (let book of books) {
        bookList.innerHTML += `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.ISBN}</td></tr>`;
    }
}

getBooks();