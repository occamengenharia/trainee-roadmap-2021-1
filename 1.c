/*Ler dois números float e apresentar, sem utilizar funções matemáticas prontas:
a) A divisão do primeiro número pelo segundo, armazenando somente a parte inteira do número.
b) A soma dos dois números com o resultado arredondado para o próximo número inteiro.
Obs.: As variáveis de resultados devem ser do tipo int. */

#include <stdio.h>
#include <math.h>

int main (void)
{
    int a, b;
    float num1, num2;

    printf("Informe um valor float:");
    scanf("%f", &num1);

    printf("Informe outro valor float: ");
    scanf("%f", &num2);

    a = num1 / num2;
    b = ceil(num1 + num2);

    printf("A divisao do primeiro pelo segundo eh: %d \n", a);
    printf("A soma dos dois numeros com o resultado arrendondado para o proximo numero inteiro eh: %d \n", b);

    printf("\nFim do programa\n");

    return 0;
}