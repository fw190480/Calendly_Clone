let nav = ()=>{
    return `<nav>
    <div class="logo">
      <a href="#">
        <img
          id="logo_hp"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTgwLjkxIDM4MS41MiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMDZiZmY7fS5jbHMtMntmaWxsOiMwYWU4ZjA7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGcgaWQ9IldvcmRtYXJrIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05MzguNDYsMTUwLjU0YzI0LjUyLDAsNDcuNzQsMTUsNTIuNjQsNDcuNDFIODgxLjljNC41Ny0yOC40NCwyNS44My00Ny40MSw1Ni41Ni00Ny40MW00OS4xNSw5NS4zNmMtOC4zNCwxMy0yNC40NiwyMy00Ni41MywyMy0zMC40MSwwLTUzLjYzLTE2LjY3LTU5LjE4LTQ2LjFoMTM3YTgzLDgzLDAsMCwwLDEtMTIuNzVjMC00NS43Ny0zMi04Ni4zMi04MS40Mi04Ni4zMi01MSwwLTg1LjY2LDM3LjYtODUuNjYsODYsMCw0OSwzNSw4Niw4Ny42Miw4NiwzMi43LDAsNTcuNTUtMTQuNzIsNzEuOTMtMzdaIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI4MTAuOTIiIHk9IjUyLjc4IiB3aWR0aD0iMjguNDQiIGhlaWdodD0iMjM4LjY5Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTE3OC4xNSwxOTEuMDlWMjkxLjQ2SDExNDkuN1YxOTIuNzJjMC0yNi44MS0xNS4zNi00MS44NS00MC41NC00MS44NS0yNi4xNiwwLTQ3LjQxLDE1LjM3LTQ3LjQxLDUzLjk1djg2LjY0SDEwMzMuM1YxMjhoMjguNDV2MjMuNTRjMTIuMS0xOS4yOSwzMC4wOC0yNy43OSw1My0yNy43OSwzOC4yNSwwLDYzLjQzLDI1LjUsNjMuNDMsNjcuMzYiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzM1LDIwOS43MmMwLTMzLjM1LTI1LjE4LTU4LjUzLTU4LjItNTguNTMtMzIuNywwLTU3Ljg3LDI1LjE4LTU3Ljg3LDU4LjUzczI1LjE3LDU4LjUzLDU3Ljg3LDU4LjUzYzMzLDAsNTguMi0yNS4xOCw1OC4yLTU4LjUzbTI4LjQ0LTE1Ni45NFYyOTEuNDdIMTMzNVYyNjMuMzRjLTEzLjA4LDIwLTM0LDMyLjM4LTYxLjgsMzIuMzgtNDUuNDUsMC04Mi43Mi0zNy42MS04Mi43Mi04NnMzNy4yNy04Niw4Mi43Mi04NmMyNy43OSwwLDQ4LjcyLDEyLjQyLDYxLjgsMzIuMzdWNTIuNzhaIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMzg2LjM4IiB5PSI1Mi43OCIgd2lkdGg9IjI4LjQ0IiBoZWlnaHQ9IjIzOC42OSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc2MC4yMiwyMDkuNzJjMC0zMy4zNS0yNS4xNy01OC41My01OC4yLTU4LjUzLTMyLjY5LDAtNTcuODcsMjUuMTgtNTcuODcsNTguNTNzMjUuMTgsNTguNTMsNTcuODcsNTguNTNjMzMsMCw1OC4yLTI1LjE4LDU4LjItNTguNTNNNzg4LjY3LDEyOFYyOTEuNDZINzYwLjIyVjI2My4zNGMtMTMuMDgsMjAtMzQsMzIuMzgtNjEuNzksMzIuMzgtNDUuNDUsMC04Mi43My0zNy42MS04Mi43My04NnMzNy4yOC04Niw4Mi43My04NmMyNy43OSwwLDQ4LjcxLDEyLjQyLDYxLjc5LDMyLjM3VjEyOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01NzMuNTEsMjYwYTg4LjUzLDg4LjUzLDAsMSwxLDI1LjYtMTUxLjQyLDg3LDg3LDAsMCwxLDEzLjQ4LDEzLjkybDI0LjYxLTE4YTExOS4xNywxMTkuMTcsMCwxLDAtMjEuNzIsMTY2LjY1TDU5OS4xLDI0NS4yNUE4OS4zMiw4OS4zMiwwLDAsMSw1NzMuNTEsMjYwIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTU1Mi4xMiwxMjh2OTIuNzhjMCwzMC0xNy40NSw0OS00NC4wOSw0OXMtNDUuOTMtMTktNDUuOTMtNDlWMTI4aC0yOC43OHY5MGMwLDQ3LjE2LDI5LjM5LDc3Ljc4LDc0LjcxLDc3Ljc4LDM5LjIsMCw0NS4zMi0yNC44LDQ1LjMyLTI1LjQydjMzLjM4YzAsMzMuMDctMTQuMzksNTEuNzUtNDQuNCw1MS43NWE0NC4xOSw0NC4xOSwwLDAsMS00NC0zOC4ybC0yNS43Myw5QTcxLjUzLDcxLjUzLDAsMCwwLDE1MDksMzgxLjUyYzQ2LjU0LDAsNzItMzAuNjMsNzItNzcuNzhWMTI4WiIvPjwvZz48ZyBpZD0iQnJhbmRfbWFyayIgZGF0YS1uYW1lPSJCcmFuZCBtYXJrIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMzEuNTgsMjIzLjIzQzIyMC42NSwyMzIuOTMsMjA3LDI0NSwxODIuMjUsMjQ1aC0xNC44Yy0xNy45MSwwLTM0LjItNi41MS00NS44Ni0xOC4zMS0xMS4zOS0xMS41My0xNy42Ni0yNy4zMS0xNy42Ni00NC40NFYxNjJjMC0xNy4xMyw2LjI3LTMyLjkxLDE3LjY2LTQ0LjQ0LDExLjY2LTExLjgsMjcuOTUtMTguMyw0NS44Ni0xOC4zaDE0LjhjMjQuNzgsMCwzOC40LDEyLjA2LDQ5LjMzLDIxLjc2LDExLjM1LDEwLDIxLjE0LDE4Ljc0LDQ3LjI1LDE4Ljc0YTc1LjExLDc1LjExLDAsMCwwLDExLjg5LS45NWwtLjA5LS4yM2E4OS41Myw4OS41MywwLDAsMC01LjQ5LTExLjI4TDI2Ny42OSw5Ny4wN2E4OS42NSw4OS42NSwwLDAsMC03Ny42NC00NC44MkgxNTUuMTRBODkuNjUsODkuNjUsMCwwLDAsNzcuNSw5Ny4wN0w2MC4wNSwxMjcuM2E4OS42Nyw4OS42NywwLDAsMCwwLDg5LjY1TDc3LjUsMjQ3LjE4QTg5LjY1LDg5LjY1LDAsMCwwLDE1NS4xNCwyOTJoMzQuOTFhODkuNjUsODkuNjUsMCwwLDAsNzcuNjQtNDQuODJMMjg1LjE0LDIxN2E4OS41Myw4OS41MywwLDAsMCw1LjQ5LTExLjI4bC4wOS0uMjJhNzQsNzQsMCwwLDAtMTEuODktMWMtMjYuMTEsMC0zNS45LDguNjktNDcuMjUsMTguNzQiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODIuMjUsMTE3LjYxaC0xNC44Yy0yNy4yNiwwLTQ1LjE3LDE5LjQ3LTQ1LjE3LDQ0LjM5djIwLjI1YzAsMjQuOTIsMTcuOTEsNDQuMzksNDUuMTcsNDQuMzloMTQuOGMzOS43MiwwLDM2LjYtNDAuNSw5Ni41OC00MC41YTkxLjY0LDkxLjY0LDAsMCwxLDE2Ljk0LDEuNTYsODkuNTQsODkuNTQsMCwwLDAsMC0zMS4xNSw5Mi41MSw5Mi41MSwwLDAsMS0xNi45NCwxLjU2Yy02MCwwLTU2Ljg2LTQwLjUtOTYuNTgtNDAuNSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzMC4yMywyMDIuNWE4My42Miw4My42MiwwLDAsMC0zNC40NS0xNC44MWMwLC4xMSwwLC4yLDAsLjNhODkuNyw4OS43LDAsMCwxLTUsMTcuNDUsNjUuNTgsNjUuNTgsMCwwLDEsMjguNDgsMTEuNzNjMCwuMDgtLjA1LjE4LS4wOC4yN2ExNTMuNTcsMTUzLjU3LDAsMSwxLDAtOTAuNjNjMCwuMDkuMDUuMTkuMDguMjdhNjUuNDUsNjUuNDUsMCwwLDEtMjguNDgsMTEuNzIsOTAuMyw5MC4zLDAsMCwxLDUsMTcuNDcsMi4zMywyLjMzLDAsMCwwLDAsLjI4LDgzLjYsODMuNiwwLDAsMCwzNC40NS0xNC44YzkuODItNy4yNyw3LjkyLTE1LjQ4LDYuNDMtMjAuMzRhMTcyLjEzLDE3Mi4xMywwLDEsMCwwLDEwMS40M2MxLjQ5LTQuODYsMy4zOS0xMy4wNy02LjQzLTIwLjM0Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjkwLjcyLDEzOC44YTc0LDc0LDAsMCwxLTExLjg5LDFjLTI2LjExLDAtMzUuOS04LjY5LTQ3LjI0LTE4Ljc0LTEwLjk0LTkuNy0yNC41Ni0yMS43Ny00OS4zNC0yMS43N2gtMTQuOGMtMTcuOTIsMC0zNC4yLDYuNTEtNDUuODYsMTguMzEtMTEuMzksMTEuNTMtMTcuNjYsMjcuMzEtMTcuNjYsNDQuNDR2MjAuMjVjMCwxNy4xMyw2LjI3LDMyLjkxLDE3LjY2LDQ0LjQ0LDExLjY2LDExLjgsMjcuOTQsMTguMyw0NS44NiwxOC4zaDE0LjhjMjQuNzgsMCwzOC40LTEyLjA2LDQ5LjM0LTIxLjc2LDExLjM0LTEwLDIxLjEzLTE4Ljc0LDQ3LjI0LTE4Ljc0YTc1LjExLDc1LjExLDAsMCwxLDExLjg5Ljk1LDg5LDg5LDAsMCwwLDUtMTcuNDUsMi42OCwyLjY4LDAsMCwwLDAtLjMsOTIuNTEsOTIuNTEsMCwwLDAtMTYuOTQtMS41NWMtNjAsMC01Ni44Niw0MC41MS05Ni41OCw0MC41MWgtMTQuOGMtMjcuMjYsMC00NS4xNy0xOS40OC00NS4xNy00NC40VjE2MmMwLTI0LjkyLDE3LjkxLTQ0LjM5LDQ1LjE3LTQ0LjM5aDE0LjhjMzkuNzIsMCwzNi42LDQwLjQ5LDk2LjU4LDQwLjQ5YTkxLjY0LDkxLjY0LDAsMCwwLDE2Ljk0LTEuNTVjMC0uMDksMC0uMTgsMC0uMjhhOTAuMyw5MC4zLDAsMCwwLTUtMTcuNDciLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yOTAuNzIsMTM4LjhhNzQsNzQsMCwwLDEtMTEuODksMWMtMjYuMTEsMC0zNS45LTguNjktNDcuMjQtMTguNzQtMTAuOTQtOS43LTI0LjU2LTIxLjc3LTQ5LjM0LTIxLjc3aC0xNC44Yy0xNy45MiwwLTM0LjIsNi41MS00NS44NiwxOC4zMS0xMS4zOSwxMS41My0xNy42NiwyNy4zMS0xNy42Niw0NC40NHYyMC4yNWMwLDE3LjEzLDYuMjcsMzIuOTEsMTcuNjYsNDQuNDQsMTEuNjYsMTEuOCwyNy45NCwxOC4zLDQ1Ljg2LDE4LjNoMTQuOGMyNC43OCwwLDM4LjQtMTIuMDYsNDkuMzQtMjEuNzYsMTEuMzQtMTAsMjEuMTMtMTguNzQsNDcuMjQtMTguNzRhNzUuMTEsNzUuMTEsMCwwLDEsMTEuODkuOTUsODksODksMCwwLDAsNS0xNy40NSwyLjY4LDIuNjgsMCwwLDAsMC0uMyw5Mi41MSw5Mi41MSwwLDAsMC0xNi45NC0xLjU1Yy02MCwwLTU2Ljg2LDQwLjUxLTk2LjU4LDQwLjUxaC0xNC44Yy0yNy4yNiwwLTQ1LjE3LTE5LjQ4LTQ1LjE3LTQ0LjRWMTYyYzAtMjQuOTIsMTcuOTEtNDQuMzksNDUuMTctNDQuMzloMTQuOGMzOS43MiwwLDM2LjYsNDAuNDksOTYuNTgsNDAuNDlhOTEuNjQsOTEuNjQsMCwwLDAsMTYuOTQtMS41NWMwLS4wOSwwLS4xOCwwLS4yOGE5MC4zLDkwLjMsMCwwLDAtNS0xNy40NyIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" 
          alt=""
      />
    <img id="logo_hp2"
    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjQxNjYgMjUuOTI5OEMyNi4xMjE2IDI3LjA1NTQgMjQuNTEwNSAyOC40NTY2IDIxLjU3NjQgMjguNDU2NkgxOS44MjQ3QzE3LjcwNDMgMjguNDU2NiAxNS43NzU5IDI3LjcwMiAxNC4zOTU1IDI2LjMzMDdDMTMuMDQ3OCAyNC45OTE0IDEyLjMwNDMgMjMuMTU5NSAxMi4zMDQzIDIxLjE3MDJWMTguODE3OUMxMi4zMDQzIDE2LjgyODYgMTMuMDQ2NiAxNC45OTU1IDE0LjM5NTUgMTMuNjU3NEMxNS43NzU5IDEyLjI4NiAxNy43MDQzIDExLjUzMTQgMTkuODI0NyAxMS41MzE0SDIxLjU3NjRDMjQuNTEwNSAxMS41MzE0IDI2LjEyMTYgMTIuOTMyNiAyNy40MTY2IDE0LjA1ODJDMjguNzU5NiAxNS4yMjYzIDI5LjkxOTkgMTYuMjM0OCAzMy4wMDk4IDE2LjIzNDhDMzMuNDg5OCAxNi4yMzQ4IDMzLjk2MDUgMTYuMTk2OSAzNC40MTgzIDE2LjEyNDVDMzQuNDE0OCAxNi4xMTUzIDM0LjQxMTMgMTYuMTA3MyAzNC40MDc4IDE2LjA5ODFDMzQuMjI0IDE1LjY1MTMgMzQuMDA3MyAxNS4yMTI1IDMzLjc1OCAxNC43ODg3TDMxLjY5MTQgMTEuMjc3NkMyOS43OTU4IDguMDU1ODUgMjYuMjkxNCA2LjA3MjI3IDIyLjUwMDIgNi4wNzIyN0gxOC4zNjdDMTQuNTc1OCA2LjA3MjI3IDExLjA3MTQgOC4wNTY5OSA5LjE3NTc3IDExLjI3NzZMNy4xMDkyMiAxNC43ODg3QzUuMjEzNTkgMTguMDEwNSA1LjIxMzU5IDIxLjk3ODcgNy4xMDkyMiAyNS4xOTkzTDkuMTc1NzcgMjguNzEwNUMxMS4wNzE0IDMxLjkzMjIgMTQuNTc1OCAzMy45MTU4IDE4LjM2NyAzMy45MTU4SDIyLjUwMDJDMjYuMjkxNCAzMy45MTU4IDI5Ljc5NTggMzEuOTMxMSAzMS42OTE0IDI4LjcxMDVMMzMuNzU4IDI1LjE5OTNDMzQuMDA3MyAyNC43NzQ0IDM0LjIyNCAyNC4zMzY3IDM0LjQwNzggMjMuODlDMzQuNDExMyAyMy44ODA4IDM0LjQxNDggMjMuODcyNyAzNC40MTgzIDIzLjg2MzVDMzMuOTYwNSAyMy43OTEyIDMzLjQ5MSAyMy43NTMzIDMzLjAwOTggMjMuNzUzM0MyOS45MTk5IDIzLjc1MzMgMjguNzU5NiAyNC43NjE3IDI3LjQxNjYgMjUuOTI5OFoiIGZpbGw9IiMwMDZCRkYiLz4KPHBhdGggZD0iTTIxLjU3NjcgMTMuNjYyMUgxOS44MjVDMTYuNTk4MiAxMy42NjIxIDE0LjQ3NjYgMTUuOTIzNiAxNC40NzY2IDE4LjgxOFYyMS4xNzAzQzE0LjQ3NjYgMjQuMDY0NyAxNi41OTcgMjYuMzI2MiAxOS44MjUgMjYuMzI2MkgyMS41NzY3QzI2LjI3ODggMjYuMzI2MiAyNS45MSAyMS42MjI4IDMzLjAxMDEgMjEuNjIyOEMzMy42OTA0IDIxLjYyMjggMzQuMzYyNCAyMS42ODM3IDM1LjAxNjkgMjEuODAzMUMzNS4yMzI0IDIwLjYwNzUgMzUuMjMyNCAxOS4zODMxIDM1LjAxNjkgMTguMTg2M0MzNC4zNjI0IDE4LjMwNTggMzMuNjkwNCAxOC4zNjY2IDMzLjAxMDEgMTguMzY2NkMyNS45MSAxOC4zNjU1IDI2LjI3ODggMTMuNjYyMSAyMS41NzY3IDEzLjY2MjFaIiBmaWxsPSIjMDA2QkZGIi8+CjxwYXRoIGQ9Ik0zOS4wOTUgMjMuNTIwM0MzNy44ODIgMjIuNjQyOCAzNi40OTEgMjIuMDcwOCAzNS4wMTU3IDIxLjgwMDlDMzUuMDEzNCAyMS44MTI0IDM1LjAxMjIgMjEuODIzOSAzNS4wMDk5IDIxLjgzNTRDMzQuODgzNCAyMi41MjQ1IDM0LjY4NjcgMjMuMjAzMyAzNC40MTc0IDIzLjg2MTRDMzUuNjYyIDI0LjA1OSAzNi44MDk1IDI0LjUxODQgMzcuNzg5NSAyNS4yMjI1QzM3Ljc4NiAyNS4yMzI4IDM3Ljc4MzYgMjUuMjQzMiAzNy43ODAxIDI1LjI1NDdDMzcuMjE0NiAyNy4wNTU2IDM2LjM2MjIgMjguNzUzMiAzNS4yNDc2IDMwLjI5OEMzNC4xNDU4IDMxLjgyMzMgMzIuODE0NSAzMy4xNjYgMzEuMjg4OSAzNC4yODgxQzI4LjEyMTcgMzYuNjE4NiAyNC4zNDkyIDM3Ljg0OTggMjAuMzc3NiAzNy44NDk4QzE3LjkxODggMzcuODQ5OCAxNS41MzUgMzcuMzc3OCAxMy4yOTE2IDM2LjQ0NzRDMTEuMTI0MyAzNS41NDgxIDkuMTc3MTggMzQuMjYwNSA3LjUwNDAyIDMyLjYxOTJDNS44MzA4NiAzMC45Nzc5IDQuNTE4MzUgMjkuMDY3OSAzLjYwMTU2IDI2Ljk0MTlDMi42NTMxNyAyNC43NDEyIDIuMTcxOTQgMjIuNDAyOCAyLjE3MTk0IDE5Ljk5MDhDMi4xNzE5NCAxNy41Nzg4IDIuNjUzMTcgMTUuMjQwMyAzLjYwMTU2IDEzLjAzOTdDNC41MTgzNSAxMC45MTM3IDUuODMwODYgOS4wMDM2IDcuNTA0MDIgNy4zNjIzQzkuMTc3MTggNS43MjEgMTEuMTI0MyA0LjQzMzQ2IDEzLjI5MTYgMy41MzQxNEMxNS41MzUgMi42MDM4IDE3LjkxODggMi4xMzE3NCAyMC4zNzc2IDIuMTMxNzRDMjQuMzQ5MiAyLjEzMTc0IDI4LjEyMTcgMy4zNjMwMSAzMS4yODg5IDUuNjkzNDVDMzIuODE0NSA2LjgxNTU5IDM0LjE0NTggOC4xNTgyNyAzNS4yNDc2IDkuNjgzNTZDMzYuMzYyMiAxMS4yMjg0IDM3LjIxNDYgMTIuOTI2IDM3Ljc4MDEgMTQuNzI2OUMzNy43ODM2IDE0LjczODQgMzcuNzg3MSAxNC43NDg3IDM3Ljc4OTUgMTQuNzU5MUMzNi44MDk1IDE1LjQ2MzEgMzUuNjYyIDE1LjkyMzcgMzQuNDE3NCAxNi4xMjAxQzM0LjY4NjcgMTYuNzc5NCAzNC44ODQ2IDE3LjQ1OTMgMzUuMDA5OSAxOC4xNDg1QzM1LjAxMjIgMTguMTYgMzUuMDEzNCAxOC4xNzAzIDM1LjAxNTcgMTguMTgxOEMzNi40OTEgMTcuOTExOSAzNy44ODA4IDE3LjMzOTkgMzkuMDk1IDE2LjQ2MjRDNDAuMjU3NiAxNS42MTgyIDQwLjAzMjggMTQuNjY0OSAzOS44NTYgMTQuMDk5OEMzNy4yOTMgNS45MzQ2NCAyOS41NDIgMCAyMC4zNzc2IDBDOS4xMjMzNCAwIDAgOC45NDk2MiAwIDE5Ljk4OTZDMCAzMS4wMjk2IDkuMTIzMzQgMzkuOTc5MyAyMC4zNzc2IDM5Ljk3OTNDMjkuNTQyIDM5Ljk3OTMgMzcuMjkzIDM0LjA0NDYgMzkuODU2IDI1Ljg3OTVDNDAuMDMyOCAyNS4zMTc4IDQwLjI1ODggMjQuMzY0NSAzOS4wOTUgMjMuNTIwM1oiIGZpbGw9IiMwMDZCRkYiLz4KPHBhdGggZD0iTTM0LjQxODcgMTYuMTIyNEMzMy45NjA5IDE2LjE5NDggMzMuNDkxNCAxNi4yMzI3IDMzLjAxMDIgMTYuMjMyN0MyOS45MjAzIDE2LjIzMjcgMjguNzYgMTUuMjI0MiAyNy40MTcgMTQuMDU2MUMyNi4xMjIgMTIuOTMwNSAyNC41MTA5IDExLjUyOTMgMjEuNTc2NyAxMS41MjkzSDE5LjgyNTFDMTcuNzA0NyAxMS41MjkzIDE1Ljc3NjMgMTIuMjgzOSAxNC4zOTU5IDEzLjY1NTNDMTMuMDQ4MiAxNC45OTQ1IDEyLjMwNDcgMTYuODI2NSAxMi4zMDQ3IDE4LjgxNThWMjEuMTY4MUMxMi4zMDQ3IDIzLjE1NzQgMTMuMDQ3IDI0Ljk5MDUgMTQuMzk1OSAyNi4zMjg2QzE1Ljc3NjMgMjcuNjk5OSAxNy43MDQ3IDI4LjQ1NDYgMTkuODI1MSAyOC40NTQ2SDIxLjU3NjdDMjQuNTEwOSAyOC40NTQ2IDI2LjEyMiAyNy4wNTMzIDI3LjQxNyAyNS45Mjc3QzI4Ljc2IDI0Ljc1OTYgMjkuOTIwMyAyMy43NTEyIDMzLjAxMDIgMjMuNzUxMkMzMy40OTAyIDIzLjc1MTIgMzMuOTYwOSAyMy43ODkxIDM0LjQxODcgMjMuODYxNEMzNC42ODggMjMuMjAzMyAzNC44ODQ3IDIyLjUyMzQgMzUuMDExMiAyMS44MzU0QzM1LjAxMzUgMjEuODIzOSAzNS4wMTQ3IDIxLjgxMjQgMzUuMDE3IDIxLjgwMDlDMzQuMzYyNSAyMS42ODE1IDMzLjY5MDQgMjEuNjIwNiAzMy4wMTAyIDIxLjYyMDZDMjUuOTEwMSAyMS42MjA2IDI2LjI3ODkgMjYuMzI0IDIxLjU3NjcgMjYuMzI0SDE5LjgyNTFDMTYuNTk4MyAyNi4zMjQgMTQuNDc2NiAyNC4wNjI0IDE0LjQ3NjYgMjEuMTY4MVYxOC44MTU4QzE0LjQ3NjYgMTUuOTIxNCAxNi41OTcxIDEzLjY1OTkgMTkuODI1MSAxMy42NTk5SDIxLjU3NjdDMjYuMjc4OSAxMy42NTk5IDI1LjkxMDEgMTguMzYzMyAzMy4wMTAyIDE4LjM2MzNDMzMuNjkwNCAxOC4zNjMzIDM0LjM2MjUgMTguMzAyNCAzNS4wMTcgMTguMTgyOUMzNS4wMTQ3IDE4LjE3MTUgMzUuMDEzNSAxOC4xNjExIDM1LjAxMTIgMTguMTQ5NkMzNC44ODU5IDE3LjQ2MTYgMzQuNjg4IDE2Ljc4MTcgMzQuNDE4NyAxNi4xMjI0WiIgZmlsbD0iIzBBRThGMCIvPgo8cGF0aCBkPSJNMzQuNDE4NyAxNi4xMjI0QzMzLjk2MDkgMTYuMTk0OCAzMy40OTE0IDE2LjIzMjcgMzMuMDEwMiAxNi4yMzI3QzI5LjkyMDMgMTYuMjMyNyAyOC43NiAxNS4yMjQyIDI3LjQxNyAxNC4wNTYxQzI2LjEyMiAxMi45MzA1IDI0LjUxMDkgMTEuNTI5MyAyMS41NzY3IDExLjUyOTNIMTkuODI1MUMxNy43MDQ3IDExLjUyOTMgMTUuNzc2MyAxMi4yODM5IDE0LjM5NTkgMTMuNjU1M0MxMy4wNDgyIDE0Ljk5NDUgMTIuMzA0NyAxNi44MjY1IDEyLjMwNDcgMTguODE1OFYyMS4xNjgxQzEyLjMwNDcgMjMuMTU3NCAxMy4wNDcgMjQuOTkwNSAxNC4zOTU5IDI2LjMyODZDMTUuNzc2MyAyNy42OTk5IDE3LjcwNDcgMjguNDU0NiAxOS44MjUxIDI4LjQ1NDZIMjEuNTc2N0MyNC41MTA5IDI4LjQ1NDYgMjYuMTIyIDI3LjA1MzMgMjcuNDE3IDI1LjkyNzdDMjguNzYgMjQuNzU5NiAyOS45MjAzIDIzLjc1MTIgMzMuMDEwMiAyMy43NTEyQzMzLjQ5MDIgMjMuNzUxMiAzMy45NjA5IDIzLjc4OTEgMzQuNDE4NyAyMy44NjE0QzM0LjY4OCAyMy4yMDMzIDM0Ljg4NDcgMjIuNTIzNCAzNS4wMTEyIDIxLjgzNTRDMzUuMDEzNSAyMS44MjM5IDM1LjAxNDcgMjEuODEyNCAzNS4wMTcgMjEuODAwOUMzNC4zNjI1IDIxLjY4MTUgMzMuNjkwNCAyMS42MjA2IDMzLjAxMDIgMjEuNjIwNkMyNS45MTAxIDIxLjYyMDYgMjYuMjc4OSAyNi4zMjQgMjEuNTc2NyAyNi4zMjRIMTkuODI1MUMxNi41OTgzIDI2LjMyNCAxNC40NzY2IDI0LjA2MjQgMTQuNDc2NiAyMS4xNjgxVjE4LjgxNThDMTQuNDc2NiAxNS45MjE0IDE2LjU5NzEgMTMuNjU5OSAxOS44MjUxIDEzLjY1OTlIMjEuNTc2N0MyNi4yNzg5IDEzLjY1OTkgMjUuOTEwMSAxOC4zNjMzIDMzLjAxMDIgMTguMzYzM0MzMy42OTA0IDE4LjM2MzMgMzQuMzYyNSAxOC4zMDI0IDM1LjAxNyAxOC4xODI5QzM1LjAxNDcgMTguMTcxNSAzNS4wMTM1IDE4LjE2MTEgMzUuMDExMiAxOC4xNDk2QzM0Ljg4NTkgMTcuNDYxNiAzNC42ODggMTYuNzgxNyAzNC40MTg3IDE2LjEyMjRaIiBmaWxsPSIjMEFFOEYwIi8+Cjwvc3ZnPgo=" alt="">
    
    </a>
      
    </div>
   
    <ul class="nav_list" id="nav-menu">
      <div class="close_menu" id="close-menu">
        <i class="bx bx-x"></i>
      </div>
      <li class="nav_item"><a href="#" class="nav_link">Individuals</a></li>
      <li class="nav_item"><a href="#" class="nav_link">Teams</a></li>
      <li class="nav_item"><a href="#" class="nav_link">Enterprise</a></li>
      <li class="nav_item dropdown">
        <a href="#" class="nav_link dropdown_link">
            Product<i class="fa-solid fa-angle-down fa-xs dropdown_icon"></i>
        </a>
        <div class="megamenu">
            <div id="startcon">
                <h2>Product</h2>
                <p>Get to know the leader in automated scheduling and see why millions connect using Calendly.</p>
            

            </div>
            <ul class="content" id="midcont">
                <div id="head88">
                    <h3>Features</h3>
                    <p1>Flexible, intuitive features for every scheduling need</p1>
                    <hr>
                </div>
                <div class="flex">
                    <div>
                        <ul>
                            <li class="megamenu_item header_megamenu"></li>
                            <li class="megamenu_item">
                                <div class="menu_icon">
                                    <i class="fa-solid fa-calendar-check" ></i>
                                </div>
                                <div class="megamenu_link">
                                    <a href="#">Routing Forms</a>
                                    <p>Request information to efficiently screen and quality people before the can schedule with you.</p>
        
                                </div>
                            </li>
                            <li class="megamenu_item">
                                <div class="menu_icon">
                                    <i class="fa-solid fa-people-group" ></i>
        
                                </div>
                                <div class="megamenu_link">
                                    <a href="#">Team Scheduling</a>
                                    <p>Customize exactly how and when you are booked.</p>
        
                                </div>
                            </li>
                            <li class="megamenu_item">
                                <div class="menu_icon">
                                     <i class="fa-solid fa-business-time" ></i>
        
                                </div>
                                <div class="megamenu_link">
                                    <a href="#">Availability Preferences</a>
                                    <p>Customize exactly how and when you are booked.</p>
        
                                </div>
                            </li>
    
                        </ul>
                    </div>
                    
                   <div id="snddiv">
                    <ul>
                        <li class="megamenu_item">
                            <div class="menu_icon">
                                <i class="fa-solid fa-calendar-day" ></i>
    
                            </div>
                            <div class="megamenu_link">
                                <a href="#">Embeds</a>
                                <p>Add Calendly on your websites to streamline scheduling.</p>
    
                            </div>
                        </li>
                        <li class="megamenu_item">
                            <div class="menu_icon">
                                <i class="fa-solid fa-circle-nodes" ></i>
    
                            </div>
                            <div class="megamenu_link">
                                <a href="#">Calendar Connection</a>
                                <p>Connect up to six calendars per user to check real-time availability.</p>
    
                            </div>
                        </li>
                        <li class="megamenu_item">
                            <div class="menu_icon">
                                <i class="fa-solid fa-bars" ></i>
    
                            </div>
                            <div class="megamenu_link">
                                <a href="#">Meeting Polls</a>
                                <p>Let your invities vote on preferred times before scheduling.</p>
    
                            </div>
                        </li>

                    </ul>
                    

                   </div>
                    

                </div>
               
                
        <a href="#" id="featlink">See all features <i class="fa-solid fa-angle-right"></i> </a>
                
                
                
               
            </ul>
            <div id="startcon2">
                <h3>Solutions</h3>
                <p>Explore how thought leaders in your industry use Calendly</p>
                <hr>
                <ul>
                    <li>
                        <h3>Sales</h3>
                        <h3>Recruiting</h3>
                        <h3>Revenue Operations</h3>
                        <h3>Customer Sucess</h3>
                        <h3>Information Technology</h3>
                        <h3>Marketing</h3>
                        <h3>Integration</h3>
                        <p>Seamless Connection to your favorite calendars, tool and apps.</p>
                    </li>
                </ul>
                 </div>
        </div>
      </li>
      <li class="nav_item"><a href="#" class="nav_link">Pricing </a></li>
      <li class="nav_item dropdown">
        <a href="#" class="nav_link dropdown_link"
          >Resources<i class="fa-solid fa-angle-down fa-xs dropdown_icon"></i
        ></a>
        <div class="megamenu">
            <div id="startcon">
                <h2>Product</h2>
                <p>Get to know the leader in automated scheduling and see why millions connect using Calendly.</p>
            

            </div>
            <ul class="content" id="midcont">
                <div id="head88">
                    <h3>Features</h3>
                    <p1>Flexible, intuitive features for every scheduling need</p1>
                    <hr>
                </div>
                <div class="flex">
                    <div>
                        <ul>
                            <li class="megamenu_item header_megamenu"></li>
                            <li class="megamenu_item">
                                <div class="menu_icon">
                                    <i class="fa-solid fa-calendar-check" ></i>
                                </div>
                                <div class="megamenu_link">
                                    <a href="#">Routing Forms</a>
                                    <p>Request information to efficiently screen and quality people before the can schedule with you.</p>
        
                                </div>
                            </li>
                            <li class="megamenu_item">
                                <div class="menu_icon">
                                    <i class="fa-solid fa-people-group" ></i>
        
                                </div>
                                <div class="megamenu_link">
                                    <a href="#">Team Scheduling</a>
                                    <p>Customize exactly how and when you are booked.</p>
        
                                </div>
                            </li>
                            <li class="megamenu_item">
                                <div class="menu_icon">
                                     <i class="fa-solid fa-business-time" ></i>
        
                                </div>
                                <div class="megamenu_link">
                                    <a href="#">Availability Preferences</a>
                                    <p>Customize exactly how and when you are booked.</p>
        
                                </div>
                            </li>
    
                        </ul>
                    </div>
                    
                   <div id="snddiv">
                    <ul>
                        <li class="megamenu_item">
                            <div class="menu_icon">
                                <i class="fa-solid fa-calendar-day" ></i>
    
                            </div>
                            <div class="megamenu_link">
                                <a href="#">Embeds</a>
                                <p>Add Calendly on your websites to streamline scheduling.</p>
    
                            </div>
                        </li>
                        <li class="megamenu_item">
                            <div class="menu_icon">
                                <i class="fa-solid fa-circle-nodes" ></i>
    
                            </div>
                            <div class="megamenu_link">
                                <a href="#">Calendar Connection</a>
                                <p>Connect up to six calendars per user to check real-time availability.</p>
    
                            </div>
                        </li>
                        <li class="megamenu_item">
                            <div class="menu_icon">
                                <i class="fa-solid fa-bars" ></i>
    
                            </div>
                            <div class="megamenu_link">
                                <a href="#">Meeting Polls</a>
                                <p>Let your invities vote on preferred times before scheduling.</p>
    
                            </div>
                        </li>

                    </ul>
                    

                   </div>
                    

                </div>
               
                
        <a href="#" id="featlink">See all features <i class="fa-solid fa-angle-right"></i> </a>
                
                
                
               
            </ul>
            <div id="startcon2">
                <h3>Solutions</h3>
                <p>Explore how thought leaders in your industry use Calendly</p>
                <hr>
                <ul>
                    <li>
                        <h3>Sales</h3>
                        <h3>Recruiting</h3>
                        <h3>Revenue Operations</h3>
                        <h3>Customer Sucess</h3>
                        <h3>Information Technology</h3>
                        <h3>Marketing</h3>
                        <h3>Integration</h3>
                        <p>Seamless Connection to your favorite calendars, tool and apps.</p>
                    </li>
                </ul>
                 </div>
        </div>    



      </li>
    </ul>
    <ul class="top-right-nav" id="right-nav">
        <li id="logbb">
           <a href="#" id="linav">Log In</a>
        </li>
        <li id="uicon">
            <i class="fa-regular fa-user"></i>
        </li>
        <li id="bbgt">
          <div class="btst">
            <button class="bb">Get Started</button>
          </div>
        </li>
      </ul>
      <ul>
        <div class="toggle_menu" id="toggle-menu">
            <i class="fa-solid fa-bars"></i>
          </div>
      </ul>

    
  </nav>`
};

export default nav;