# Panduan Menampilkan Gambar di Web Galeri Batik

## 📁 File Gambar yang Tersedia

Semua gambar disimpan di folder root yang sama dengan file HTML:

| Nama File | Ukuran | Penggunaan |
|-----------|--------|-----------|
| `batik.jpeg` | - | Galeri Batik Mega Mendung |
| `OIP.jpeg` | - | Galeri Batik Papua Kontemporer |
| `OIP (1).jpeg` | - | Galeri Batik Parang Rusak |
| `OIP (2).jpeg` | - | Hero Image Pengrajin |
| `OIP (3).jpeg` | - | Hero Image Dekarbonisasi |
| `288094-batik-madura-motif-gentongan.jpeg` | - | Galeri Batik Gentongan |

---

## 🎨 Cara 1: Background Image (Untuk Hero Section)

### Menggunakan CSS Class:
```css
.hero-image {
    background-image: url('nama-gambar.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    min-height: 220px;
}
```

### Menggunakan Inline Style (Lebih Fleksibel):
```html
<div class="hero-image" style="background-image: url('OIP (3).jpeg');"></div>
```

---

## 🖼️ Cara 2: Tag IMG (Untuk Gallery/Profile)

### HTML:
```html
<img src="batik.jpeg" alt="Deskripsi Gambar" class="gallery-image">
```

### CSS:
```css
.gallery-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

---

## 📸 Implementasi di File HTML

### 1. **dekarbonisasi.html** - Hero Section
```html
<div class="hero-image" style="background-image: url('OIP (3).jpeg');" 
     aria-label="Ilustrasi energi terbarukan"></div>
```
✅ Status: **Sudah diterapkan**

### 2. **pengrajin.html** - Hero Section
```html
<div class="hero-image" style="background-image: url('OIP (2).jpeg');" 
     aria-label="Ilustrasi pengrajin membatik"></div>
```
✅ Status: **Sudah diterapkan**

### 3. **index.html** - Gallery Cards (Sudah Aktif)
```html
<div class="gallery-image" style="background-image: url('batik.jpeg')"></div>
<div class="gallery-image" style="background-image: url('OIP.jpeg')"></div>
<div class="gallery-image" style="background-image: url('OIP (1).jpeg')"></div>
<div class="gallery-image" style="background-image: url('288094-batik-madura-motif-gentongan.jpeg')"></div>
```
✅ Status: **Sudah aktif**

---

## 🎯 Tips Optimasi Gambar

### 1. **Kompresi Gambar** (Penting untuk Performa)
- Gunakan tools seperti TinyPNG atau ImageOptim
- Ukuran ideal: 50-200KB per gambar
- Format: JPEG (untuk foto), PNG (untuk transparansi), WebP (generasi baru)

### 2. **Responsive Images**
```html
<img src="batik-small.jpeg" 
     srcset="batik-medium.jpeg 768w, batik-large.jpeg 1200w"
     alt="Batik Image" 
     sizes="(max-width: 768px) 100vw, 50vw">
```

### 3. **Lazy Loading** (Menghemat Bandwidth)
```html
<img src="batik.jpeg" alt="Batik" loading="lazy">
```

### 4. **Dark Mode Support**
Gambar akan otomatis beradaptasi di dark mode karena sudah menggunakan variabel tema CSS.

---

## 🚀 Cara Menambah Gambar Baru

### Langkah 1: Upload Gambar
- Letakkan file gambar (`.jpeg`, `.png`, `.webp`) di folder yang sama

### Langkah 2: Update HTML
```html
<!-- Untuk Hero Section -->
<div class="hero-image" style="background-image: url('nama-gambar-baru.jpeg');"></div>

<!-- Untuk Gallery Card -->
<div class="gallery-image" style="background-image: url('nama-gambar-baru.jpeg');"></div>

<!-- Untuk Profile Photo -->
<div class="profile-photo" style="background-image: url('nama-gambar-baru.jpeg');"></div>
```

### Langkah 3: Pastikan Path Benar
- ✅ Jika gambar di folder yang sama: `url('gambar.jpeg')`
- ✅ Jika gambar di subfolder: `url('images/gambar.jpeg')`
- ❌ Jangan gunakan path absolut seperti `C:/Users/...`

---

## 📋 Checklist Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Gambar tidak muncul | Periksa nama file & path (case-sensitive di Linux) |
| Gambar terpotong | Tambahkan `background-size: cover;` dan `background-position: center;` |
| Gambar buram | Kompres gambar atau naikkan resolusi |
| Lambat loading | Gunakan `loading="lazy"` atau kompres gambar |
| Dark mode tidak cocok | Gunakan `object-fit` atau opacity filter |

---

## 🎨 Contoh Lengkap: Hero Image dengan Fallback

```html
<div class="hero-image" 
     style="background-image: url('OIP (3).jpeg'); 
             background-color: #f0f0f0;"
     aria-label="Energi terbarukan">
</div>
```

**Penjelasan:**
- `background-image`: Gambar utama
- `background-color`: Warna fallback jika gambar gagal load

---

## 📞 Hubungi Support

Jika ada pertanyaan tentang gambar atau performa, pastikan:
1. ✅ Gambar sudah dikompres
2. ✅ Path file sudah benar
3. ✅ Format gambar didukung (JPEG, PNG, WebP)
4. ✅ File tidak corrupt

**Semua gambar sudah diterapkan dan siap digunakan!** 🎉
