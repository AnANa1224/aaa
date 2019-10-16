#include <stdio.h>


int main()
{
    int i,n;
    double a[256],sum,avg;
    printf("请先输入个数，再输入相对应个数的值，空格隔开，回车求值：\n");
    scanf("%d",&n); if ( n>256 ) n=256;
    sum=0;
    for ( i=0;i<n;i++ ) { 
	scanf("%lf",&a[i]);
	sum+=a[i];
    }
    avg = sum/n;
    printf("平均值=%lf\n",avg);
}
