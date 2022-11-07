# API Doku

## HTTP Request

### URL (Route): /images/?folder=<first><second>}

### URL (Route): /home

( absolute URL: 127.0.0.1:8000/ )

### HTTP-Methode: GET

## HTTP Response

success:
{
message: "ok",
data: [{
fileName: 'bild3.jpg',
lastModified: 2022-10-25T20:00:13.000Z,
filesize: 28906,
pfad: './images/first/bild3.jpg'
}],
}

error:

{

res.status(404).json({
message: "Fail",
data: null,
});

}
