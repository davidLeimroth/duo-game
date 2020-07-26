package main

import (
	"context"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {

	ctx, cancel := context.WithCancel(context.Background())

	defer cancel()

	router := mux.NewRouter()

	fs := http.FileServer(http.Dir("../../frontend/web/build"))

	router.Handle("/", fs)



	fmt.Println("Running Server")
}
