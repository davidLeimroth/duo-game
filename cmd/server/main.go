package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {

	router := mux.NewRouter()

	fs := http.FileServer(http.Dir("../../frontend/web/build"))

	router.Handle("/", fs)

	fmt.Println("Running Server")
}
