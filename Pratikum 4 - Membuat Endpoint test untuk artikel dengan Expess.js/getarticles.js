export async  function getArticles() {
    try {
        const res = await fetch("https://localhots:8001/api/test/getarticle");
        if (!res.ok) {
            throw new Error("Gagal mengambil data artikel");
        }
        const data = await res.json();
        return data.data; // sesuai struktur di serve.js { status, data}
    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
}