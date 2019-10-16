#include <stdio.h>


int main()
{
    int i,n;
    double a[256],sum,avg;
    printf("请先输入个数n：\n");
    scanf("%d",&n); if ( n>256 ) n=256;
    sum=0;
    printf("输入%d个数字，空格或者回车隔开:\n",n); 
    for ( i=0;i<n;i++ ) {
	scanf("%lf",&a[i]);
	sum+=a[i];
    }
    avg = sum/n;
    printf("平均值=%lf\n",avg);
}
