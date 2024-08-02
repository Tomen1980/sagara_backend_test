# Backend API Documentation
    ini adalah dokumentasi API 

## Menampilkan semua data baju yang ada
```
GET http://localhost:3000/api/inventaris/
```

## Menampilkan Baju dengan ID tertentu
```
GET http://localhost:3000/api/inventaris/clothes/(:id)
```

## Tambah Baju
```
#Body 
    name,
    color,
    size,
    price,
    stock

POST http://localhost:3000/api/inventaris/
```

## Update Baju
```
#Body 
    name,
    color,
    size,
    price,
    stock

POST http://localhost:3000/api/inventaris/(:id)
```

## Hapus Baju
```
Delete http://localhost:3000/api/inventaris/(:id)
```

## search
```
#body
    search

POST http://localhost:3000/api/inventaris/search
```

## Tambah Stock
```
#body
    stock

PATCH http://localhost:3000/api/inventaris/(:id)/addStock
```

## Kurangi Stock
```
#body
    stock

PATCH http://localhost:3000/api/inventaris/(:id)/deleteStock
```

## Menampilkan Baju Tersedia
```
note:
Menampilkan semua baju yang stocknya tidak 0
```

```
GET http://localhost:3000/api/inventaris/available
```

## Menampilkan Baju Stok 0
```
note:
Menampilkan semua baju yang stoknya 0
```

```
GET http://localhost:3000/api/inventaris/notAvailable
```

## Menampilkan Baju Stok <5
```
note:
Menampilkan semua baju yang stoknya kurang dari 5
```

```
GET http://localhost:3000/api/inventaris/lessThanFive
```

