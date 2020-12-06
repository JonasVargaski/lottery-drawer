/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Button, Paper, InputAdornment } from "@material-ui/core";

import CardGame from "../../components/CardGame";
import { Container, Form, Results, SCTextField } from "./styles";

import generate from "../../utils/generate";

const defaultConfigs = {
  cards: 3,
  dozens: 6,
  ignored: [],
  min: 1,
  max: 60,
};

function Sorting() {
  const [games, setGames] = useState([]);
  const [config, setConfigs] = useState({});

  const genericNumbers = useMemo(() => {
    if (config.max)
      return Array.from(Array((config.max || 1) + 1).keys()).filter(
        (x) => x >= (config.min || 1)
      );
    return [];
  }, [config]);

  const handleChangeSelectted = useCallback(
    (number) => {
      if (config.ignored.includes(number))
        setConfigs({
          ...config,
          ignored: config.ignored.filter((x) => x !== number),
        });
      else setConfigs({ ...config, ignored: [...config.ignored, number] });
    },
    [config, setConfigs]
  );

  const handleClear = useCallback(() => {
    setGames([]);
    setConfigs((x) => ({ ...x, ignored: [] }));
  }, [setConfigs]);

  const handleGenerate = useCallback(() => {
    localStorage.setItem("sorter:configs", JSON.stringify(config));
    setGames(generate(config));
  }, [config, setGames]);

  useEffect(() => {
    const cfg = localStorage.getItem("sorter:configs");
    if (cfg) {
      setConfigs({ ...JSON.parse(cfg), ignored: [] });
    } else {
      setConfigs(defaultConfigs);
    }
  }, []);

  return (
    <Container>
      <main>
        <Paper elevation={3}>
          <Form>
            <header>Gerador de Jogos</header>

            <CardGame
              title="Numeros descartados"
              numbers={genericNumbers}
              selecteds={config.ignored}
              handleChange={handleChangeSelectted}
            />

            <section>
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

              <SCTextField
                fullWidth
                variant="outlined"
                label="Numeros por Jogo"
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

              <SCTextField
                fullWidth
                variant="outlined"
                label="Quantidade de Jogos"
                type="number"
                value={config.cards}
                onChange={({ target }) =>
                  setConfigs((old) => ({ ...old, cards: Number(target.value) }))
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">1 ~ 99</InputAdornment>
                  ),
                }}
              />
            </section>

            <footer>
              <Button variant="contained" color="default" onClick={handleClear}>
                Limpar
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleGenerate}
              >
                Gerar Jogos
              </Button>
            </footer>
          </Form>
        </Paper>

        {!!games.length && (
          <Paper elevation={3}>
            <Results>
              {games.map((game, index) => (
                <CardGame
                  key={index}
                  title={`Jogo Nº ${index + 1}`}
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
