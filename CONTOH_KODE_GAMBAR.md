# 🎨 Kode Lengkap untuk Menampilkan Gambar di Web

## ✅ Implementasi yang Sudah Dilakukan

### 1. **dekarbonisasi.html** - Selesai ✅
```html
<div class="hero-image" style="background-image: url('OIP (3).jpeg');" 
     aria-label="Ilustrasi energi terbarukan dan server ramah lingkungan"></div>
```
- Menggunakan: `OIP (3).jpeg`
- Tipe: Hero Background Image
- Ukuran: Responsive (min-height: 220px)

---

### 2. **pengrajin.html** - Selesai ✅
```html
<div class="hero-image" style="background-image: url('OIP (2).jpeg');" 
     aria-label="Ilustrasi tangan pengrajin sedang membatik dengan canting"></div>
```
- Menggunakan: `OIP (2).jpeg`
- Tipe: Hero Background Image
- Ukuran: Responsive (min-height: 220px)

---

### 3. **index.html** - Gallery Cards ✅
```html
<!-- Kartu 1 -->
<div class="gallery-card" data-daerah="cirebon" data-teknik="cap" onclick="openModal('mega')">
    <div class="gallery-image" style="background-image: url('batik.jpeg')"></div>
    <div class="gallery-content">
        <div class="gallery-title">Batik Mega Mendung</div>
        ...
    </div>
</div>

<!-- Kartu 2 -->
<div class="gallery-card" data-daerah="papua" data-teknik="kombinasi" onclick="openModal('papua')">
    <div class="gallery-image" style="background-image: url('OIP.jpeg')"></div>
    <div class="gallery-content">
        <div class="gallery-title">Batik Papua Kontemporer</div>
        ...
    </div>
</div>

<!-- Kartu 3 -->
<div class="gallery-card" data-daerah="solo" data-teknik="tulis" onclick="openModal('parang')">
    <div class="gallery-image" style="background-image: url('OIP (1).jpeg')"></div>
    <div class="gallery-content">
        <div class="gallery-title">Batik Parang Rusak</div>
        ...
    </div>
</div>

<!-- Kartu 4 -->
<div class="gallery-card" data-daerah="madura" data-teknik="tulis" onclick="openModal('gentongan')">
    <div class="gallery-image" style="background-image: url('288094-batik-madura-motif-gentongan.jpeg')"></div>
    <div class="gallery-content">
        <div class="gallery-title">Batik Motif Gentongan</div>
        ...
    </div>
</div>
```

---

## 🎯 CSS yang Mendukung Gambar

### Hero Image CSS:
```css
.hero-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    min-height: 220px;
    border: 2px solid var(--accent);
}
```

### Gallery Image CSS:
```css
.gallery-image {
    background: #ddd url('https://via.placeholder.com/400x250?text=Batik') center/cover no-repeat;
    height: 140px;
    background-size: cover;
    background-position: center;
}
```

### Profile Photo CSS:
```css
.profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin: 0 auto 15px;
    border: 4px solid var(--accent);
}
```

---

## 📝 Template untuk Gambar Baru

### Template 1: Hero Section
```html
<div class="hero-image" style="background-image: url('NAMA_GAMBAR.jpeg');" 
     aria-label="Deskripsi gambar"></div>
```

### Template 2: Gallery Card
```html
<div class="gallery-card" data-daerah="DAERAH" data-teknik="TEKNIK" onclick="openModal('ID')">
    <div class="gallery-image" style="background-image: url('NAMA_GAMBAR.jpeg')"></div>
    <div class="gallery-content">
        <div class="gallery-title">Judul Batik</div>
        <div class="gallery-meta">Asal: DAERAH • Teknik: TEKNIK</div>
        <div class="gallery-desc">Deskripsi</div>
    </div>
</div>
```

### Template 3: Profile Photo
```html
<div class="profile-photo" style="background-image: url('NAMA_GAMBAR.jpeg');"></div>
```

---

## 📂 Daftar File Gambar yang Tersedia

| No | Nama File | Status | Penggunaan |
|----|-----------|--------|-----------|
| 1 | `batik.jpeg` | ✅ Aktif | Gallery Mega Mendung |
| 2 | `OIP.jpeg` | ✅ Aktif | Gallery Papua |
| 3 | `OIP (1).jpeg` | ✅ Aktif | Gallery Parang |
| 4 | `OIP (2).jpeg` | ✅ Aktif | Hero Pengrajin |
| 5 | `OIP (3).jpeg` | ✅ Aktif | Hero Dekarbonisasi |
| 6 | `288094-batik-madura-motif-gentongan.jpeg` | ✅ Aktif | Gallery Gentongan |

---

## 🚀 Cara Menambah Gambar Baru

### Step 1: Rename Gambar (Opsional tapi Disarankan)
```
batik-parang-rusak.jpeg (lebih deskriptif dari OIP (1).jpeg)
batik-pengrajin.jpeg (lebih deskriptif dari OIP (2).jpeg)
```

### Step 2: Update HTML Path
```html
<!-- Dari: -->
<div class="gallery-image" style="background-image: url('OIP (1).jpeg')"></div>

<!-- Ke: -->
<div class="gallery-image" style="background-image: url('batik-parang-rusak.jpeg')"></div>
```

### Step 3: Test di Browser
- Buka F12 (DevTools)
- Cek Network tab - pastikan gambar load dengan status 200 OK
- Cek Console - tidak ada error 404

---

## 🎨 Dark Mode Compatibility

Semua gambar sudah kompatibel dengan dark mode karena:
- ✅ Menggunakan background-image (otomatis adaptif)
- ✅ Border menggunakan `var(--accent)` (berubah otomatis)
- ✅ Text overlay menggunakan `var(--text-secondary)` (terbaca di dark mode)

---

## ⚡ Performance Tips

### 1. Kompres Gambar
```bash
# Menggunakan ImageMagick:
convert batik.jpeg -quality 85 -resize 1000x800 batik-compressed.jpeg

# Atau gunakan TinyPNG online: https://tinypng.com/
```

### 2. Lazy Loading
```html
<img src="batik.jpeg" alt="Batik" loading="lazy">
```

### 3. WebP Format (Modern)
```html
<picture>
    <source srcset="batik.webp" type="image/webp">
    <img src="batik.jpeg" alt="Batik">
</picture>
```

---

## 🔍 Debugging Checklist

| ✓ | Checklist |
|---|-----------|
| [ ] Nama file benar dan case-sensitive |
| [ ] File exists di folder yang sama dengan HTML |
| [ ] Format gambar valid (JPEG, PNG, WebP) |
| [ ] Path tidak menggunakan backslash (\\) |
| [ ] Tidak ada spasi di awal/akhir path |
| [ ] Browser cache di-clear (Ctrl+Shift+Del) |
| [ ] DevTools Network menunjukkan status 200 |

---

## 📞 Contoh Error & Solusi

### Error 1: Gambar tidak muncul
```
❌ <div style="background-image: url('C:/Users/file.jpeg')"></div>
✅ <div style="background-image: url('file.jpeg')"></div>
```

### Error 2: Path dengan spasi
```
❌ <div style="background-image: url('OIP (1) .jpeg')"></div>
✅ <div style="background-image: url('OIP (1).jpeg')"></div>
```

### Error 3: Path Windows
```
❌ <div style="background-image: url('images\\batik.jpeg')"></div>
✅ <div style="background-image: url('images/batik.jpeg')"></div>
```

---

## ✨ Kesimpulan

✅ **Semua gambar sudah diterapkan dan siap digunakan:**
- dekarbonisasi.html dengan `OIP (3).jpeg`
- pengrajin.html dengan `OIP (2).jpeg`
- index.html gallery dengan 4 gambar batik

🎉 **Website Anda sekarang memiliki:**
- Hero images yang responsif
- Gallery cards dengan gambar batik asli
- Dark mode support penuh
- Performance optimization siap

Enjoy! 🎨✨
