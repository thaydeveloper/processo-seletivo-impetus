import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { fetchProdutos } from "../lib/slices/produtosSlice";

const VitrineOnline = () => {
  return <ContentVitrine />;
};

const ContentVitrine = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 4;
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.produtos);

  const indiceUltimoProduto = paginaAtual * produtosPorPagina;
  const indicePrimeiroProduto = indiceUltimoProduto - produtosPorPagina;
  const produtosPaginaAtual = items.slice(
    indicePrimeiroProduto,
    indiceUltimoProduto
  );

  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const handleProximaPagina = () => {
    if (indiceUltimoProduto < items.length) {
      setPaginaAtual(paginaAtual + 1);
    }
  };
  useEffect(() => {
    dispatch(fetchProdutos());
  }, [dispatch]);

  return (
    <Box
      key={items?.id}
      sx={{
        width: "100vw",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "auto",
        alignItems: "center",
        paddingBottom: "50px",
      }}
    >
      <Grid
        container
        spacing={1}
        className="w-full gap-4 p-4 flex justify-center items-center "
        sx={{
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 1860px)": {
            paddingTop: "250px",
          },
          "@media (max-width: 780px)": {
            paddingTop: "100px",
          },
          "@media (max-width: 540px)": {
            paddingTop: "90vh",
            gridTemplateColumns: "repeat(1, 2fr)",
          },
        }}
      >
        {produtosPaginaAtual.map((produto) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "350px",
              height: "450px",

              "@media (max-width:1600px)": {
                height: "400px",
              },
              "@media (max-width:1107px)": {
                width: "300px",
                height: "450px",
                paddingTop: "80px",
              },
              "@media (max-width:780px)": {
                width: "300px",
                minHeight: "350px",
                objectFit: "cover",
                paddingBottom: "30px",
              },

              "@media (max-width:957px)": {
                width: "300px",
                maxHeight: "300px",
                padding: 0,
              },

              "@media (max-width:940px)": {
                width: "250px",
                height: "300px",
              },
              "@media (max-width:642px)": {
                width: "250px",
                paddingTop: "30px",
              },
            }}
            className=" object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out cursor-pointer"
          >
            <CardMedia
              component="img"
              image={produto?.image}
              alt={produto?.title}
              sx={{
                "@media (max-width:1107px)": {
                  height: "280px",
                },
                "@media (max-width:780px)": {
                  width: "300px",
                  minHeight: "250px",
                  objectFit: "cover",
                  paddingBottom: "30px",
                },
                "@media (max-width:642px)": {
                  width: "250px",
                },
              }}
              className="max-w-40 max-h-60 object-cover hover:scale-105 transition-transform duration-500 ease-in-out md:w-30 lg:w-30 xl:w-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out cursor-pointer"
            />

            <CardContent>
              <Typography
                sx={{
                  "@media (max-width:1100px)": {
                    fontSize: 12,
                  },
                  "@media (max-width:642px)": {
                    fontSize: 11,
                  },
                }}
                gutterBottom
                variant="h6"
                component="p"
              >
                {produto?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${produto?.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={handlePaginaAnterior}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
          onClick={handleProximaPagina}
          disabled={indiceUltimoProduto >= items.length}
        >
          Próxima
        </button>
      </div>
    </Box>
  );
};

export default VitrineOnline;
