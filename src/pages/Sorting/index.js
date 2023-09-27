/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Button, Paper, InputAdornment, Grid } from "@material-ui/core";
import CardGame from "../../components/CardGame";
import { Container, Form, Results, SCTextField } from "./styles";
import { generateRandomNumbersWithoutRepeating } from "../../utils/random";

function Sorting() {
  const [games, setGames] = useState([]);
  const [config, setConfigs] = useState(() => ({
    min: 1,
    max: 60,
    dozens: 6,
    cards: 6,
  }));

  const genericNumbers = useMemo(() => {
    if (config.max)
      return Array.from(Array((config.max || 1) + 1).keys()).filter(
        (x) => x >= (config.min || 1)
      );
    return [];
  }, [config]);

  const handleGenerate = useCallback(() => {
    setGames(
      generateRandomNumbersWithoutRepeating({
        ...config,
        length: config.dozens,
        count: config.cards,
      })
    );
  }, [config, setGames]);

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <Container>
      <main>
        <Paper elevation={3} style={{ padding: 12 }}>
          <Form>
            <header>Gerador de números aleatórios</header>

            <Grid container spacing={2} style={{ marginTop: 8 }}>
              <Grid item xs={12} sm={3}>
                <SCTextField
                  fullWidth
                  variant="outlined"
                  label="Numero inicial"
                  type="number"
                  value={config.min}
                  onChange={({ target }) =>
                    setConfigs((old) => ({ ...old, min: Number(target.value) }))
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">1 ~ 99</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <SCTextField
                  fullWidth
                  variant="outlined"
                  label="Numero final"
                  type="number"
                  value={config.max}
                  onChange={({ target }) =>
                    setConfigs((old) => ({ ...old, max: Number(target.value) }))
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">1 ~ 99</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <SCTextField
                  fullWidth
                  variant="outlined"
                  label="Quantidade de números"
                  type="number"
                  value={config.dozens}
                  onChange={({ target }) =>
                    setConfigs((old) => ({
                      ...old,
                      dozens: Number(target.value),
                    }))
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">1 ~ 99</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <SCTextField
                  fullWidth
                  variant="outlined"
                  label="Quantidade de combinações"
                  type="number"
                  value={config.cards}
                  onChange={({ target }) =>
                    setConfigs((old) => ({
                      ...old,
                      cards: Number(target.value),
                    }))
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">1 ~ 99</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "flex-end", gap: 16 }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#8fc93a",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                  onClick={handleGenerate}
                >
                  Gerar Novamente
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Paper>

        {!!games.length && (
          <Paper elevation={3}>
            <Results>
              {games.map((game, index) => (
                <CardGame
                  key={index}
                  title={`Combinação ${games.length - index}`}
                  numbers={genericNumbers}
                  selecteds={game}
                />
              ))}
            </Results>
          </Paper>
        )}
      </main>
    </Container>
  );
}

export default Sorting;
