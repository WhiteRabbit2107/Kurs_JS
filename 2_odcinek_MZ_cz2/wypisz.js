function wypisz()
{
  var liczba1 = document.getElementById("pole1").value;
  var liczba2 = document.getElementById("pole2").value;
  var napis = "";

  if (liczba1>liczba2) document.getElementById("wynik").innerHTML="zła kolejność";
  else if (liczba1<liczba2)
  { for (i=liczba1; i<=liczba2; i++)
    {
      napis = napis+i+" ";
    }
  document.getElementById("wynik").innerHTML=napis;
  }
  else document.getElementById("wynik").innerHTML="to nie jest liczba";
}
